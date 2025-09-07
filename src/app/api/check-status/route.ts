import { NextResponse } from 'next/server';

import { getDemoCaseByTrackingId } from '@/lib/demo-data.util';
import { getDemoModeFromRequest } from '@/lib/demo-mode';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const trackingId = searchParams.get('trackingId');
    const isDemo = getDemoModeFromRequest(request);

    console.log('Check-status API called with:', { trackingId, isDemo });

    if (!trackingId) {
      return NextResponse.json(
        { error: 'Tracking ID is required' },
        { status: 400 },
      );
    }

    // Demo mode: return pre-stored results immediately
    if (isDemo && trackingId.startsWith('demo-')) {
      console.log('Demo mode detected, looking for tracking ID:', trackingId);
      const demoCase = await getDemoCaseByTrackingId(trackingId);

      if (demoCase) {
        console.log('Demo mode: returning result for', demoCase.name);
        return NextResponse.json(demoCase.result);
      } else {
        console.log('Demo mode: no case found for tracking ID', trackingId);
        return NextResponse.json(
          { error: 'Demo case not found' },
          { status: 404 },
        );
      }
    }

    const API_USERNAME = 'explainmed';
    const API_PASSWORD = 'explainmed';
    const API_BASE_URL = 'http://localhost:80';

    // Get authentication token
    const tokenResponse = await fetch(`${API_BASE_URL}/api-token-auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: API_USERNAME,
        password: API_PASSWORD,
      }),
    });

    if (!tokenResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to authenticate with the API' },
        { status: 401 },
      );
    }

    const tokenData = await tokenResponse.json();
    const token = tokenData.token;

    // Make the API request to check status
    const response = await fetch(
      `${API_BASE_URL}/api/task/status/${trackingId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`,
        },
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: 'Analysis not found' },
          { status: 404 },
        );
      }

      return NextResponse.json(
        { error: `API responded with status: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to check status' },
      { status: 500 },
    );
  }
}
