import { NextResponse } from 'next/server';

import { getDemoModeFromRequest } from '@/lib/demo-mode';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const isDemo = getDemoModeFromRequest(request);

    console.log('in summarize, demo mode:', isDemo);

    // Demo mode: return "Bazinga" for demo purposes
    if (isDemo) {
      console.log('Demo mode: returning Bazinga summary');
      return NextResponse.json({
        state: 'SUCCESS',
        result: 'Bazinga',
      });
    }

    // Real API implementation (when demo mode is false)
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

    // Make the actual API request with the token
    const response = await fetch(`${API_BASE_URL}/api/async/summarize/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        document: body.document,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `API responded with status: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log('API response data:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);

    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}
