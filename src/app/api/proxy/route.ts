import { NextResponse } from 'next/server';

// In a real application, these would be environment variables
const API_USERNAME = 'explainmed';
const API_PASSWORD = 'explainmed';
const API_BASE_URL = 'http://localhost:80';

// This would typically be stored in a more persistent way
let authToken: string | null = null;

async function getAuthToken() {
  if (authToken) {
    return authToken;
  }

  const response = await fetch(`${API_BASE_URL}/api-token-auth/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: API_USERNAME,
      password: API_PASSWORD,
    }),
  });

  if (!response.ok) {
    console.error(
      'Authentication failed:',
      response.status,
      response.statusText,
    );
    throw new Error('Authentication failed');
  }

  const data = await response.json();
  authToken = data.token;
  return authToken;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Get authentication token
    let token;
    try {
      token = await getAuthToken();
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to authenticate with the API' },
        { status: 401 },
      );
    }

    // Make the actual API request with the token
    const response = await fetch(`${API_BASE_URL}/api/identify/`, {
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
      // If we get a 401, our token might be expired
      if (response.status === 401) {
        // Clear the token and try again (not implemented here for simplicity)
        authToken = null;
      }

      return NextResponse.json(
        { error: `API responded with status: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}
