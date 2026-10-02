import { NextResponse } from 'next/server';

import { findDemoCase, findDemoCaseByTrackingId } from '@/lib/demo-data.util';
import { getDemoModeFromRequest } from '@/lib/demo-mode';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const isDemo = getDemoModeFromRequest(request);

    console.log('in summarize, demo mode:', isDemo);

    // Demo mode: return appropriate demo case summary
    if (isDemo) {
      console.log('Demo mode: looking for demo case summary');
      console.log(
        'Demo mode: received document preview:',
        body.document.substring(0, 100) + '...',
      );

      // For demo mode, try to find the demo case by matching the document content
      // The document might be processed HTML, so we need to be smart about matching
      const demoCase = findDemoCase(body.document);
      console.log('Demo mode: found demo case:', demoCase?.name || 'none');

      if (demoCase && demoCase.summary) {
        console.log('Demo mode: returning summary for', demoCase.name);
        return NextResponse.json(demoCase.summary);
      }

      // If direct matching fails, try to get original document from tracking ID
      const { searchParams } = new URL(request.url);
      const trackingId = searchParams.get('trackingId');

      if (trackingId && trackingId.startsWith('demo-')) {
        const originalDemoCase = findDemoCaseByTrackingId(trackingId);

        if (originalDemoCase && originalDemoCase.summary) {
          console.log(
            'Demo mode: returning summary for original case:',
            originalDemoCase.name,
          );
          return NextResponse.json(originalDemoCase.summary);
        }
      }

      // Fallback: return a generic demo summary
      console.log('Demo mode: returning generic demo summary');
      return NextResponse.json({
        state: 'SUCCESS',
        result:
          '<div class="space-y-6"><div class="rounded-lg bg-blue-50 p-4"><h3 class="text-lg font-semibold text-blue-900 mb-2">Samenvatting</h3><p class="text-blue-800">Dit is een demo samenvatting. In de echte versie zou hier een geautomatiseerde samenvatting van het medisch verslag staan.</p></div></div>',
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

    // The async API returns a task ID, not the final result
    // Return the task ID so the client can poll for the result
    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);

    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}
