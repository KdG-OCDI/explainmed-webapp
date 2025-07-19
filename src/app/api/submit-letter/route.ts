import { NextResponse } from 'next/server';

import {
  findDemoCase,
  generateDemoTrackingId,
  storeDemoTracking,
} from '@/lib/demo-data';
import { getDemoModeFromRequest } from '@/lib/demo-mode';
import { storeDocument } from '@/lib/document-store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const isDemo = getDemoModeFromRequest(request);

    console.log('in submit-letter, demo mode:', isDemo);

    // Demo mode: return pre-stored results
    if (isDemo) {
      const demoCase = findDemoCase(body.document);

      if (demoCase) {
        const trackingId = generateDemoTrackingId();
        storeDocument(trackingId, body.document);
        storeDemoTracking(trackingId, demoCase.id);

        console.log('Demo mode: found case for', demoCase.name);
        return NextResponse.json({ id: trackingId });
      } else {
        console.log('Demo mode: no matching case found');
        return NextResponse.json(
          {
            error:
              'Geen demo case gevonden. Probeer een van de voorbeeldteksten: Bob Dylan, Maria Jansen, Jan de Vries, Anna Bakker, of Piet van der Berg.',
          },
          { status: 404 },
        );
      }
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

    console.log(tokenResponse);

    if (!tokenResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to authenticate with the API' },
        { status: 401 },
      );
    }

    const tokenData = await tokenResponse.json();
    const token = tokenData.token;

    console.log(tokenData);

    // Make the actual API request with the token
    const response = await fetch(`${API_BASE_URL}/api/async/simplate/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        document: body.document,
      }),
    });

    console.log(response);

    if (!response.ok) {
      return NextResponse.json(
        { error: `API responded with status: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log('API response data:', data);
    const trackingId = data.task_id || data.id;

    if (!trackingId) {
      console.error('Geen tracking ID ontvangen van API:', data);
      return NextResponse.json(
        { error: 'Geen tracking ID ontvangen van API' },
        { status: 500 },
      );
    }

    storeDocument(trackingId, body.document);

    // Stuur de tracking ID terug naar de client
    return NextResponse.json({ id: trackingId });
  } catch (error) {
    console.error('API error:', error);

    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}
