import { NextResponse } from 'next/server';

import { getDocument } from '@/lib/document-store';

// For testing without a backend
const DUMMY_MODE = true;

// Function to add explanations to medical terms for testing
function addExplanationsToText(text: string) {
  // List of medical terms to explain
  const medicalTerms = [
    { term: 'hypertension', explanation: 'high blood pressure' },
    { term: 'myocardial infarction', explanation: 'heart attack' },
    { term: 'dyspnea', explanation: 'shortness of breath' },
    { term: 'tachycardia', explanation: 'abnormally rapid heart rate' },
    { term: 'arrhythmia', explanation: 'irregular heartbeat' },
    { term: 'hyperlipidemia', explanation: 'high cholesterol levels' },
    {
      term: 'diabetes mellitus',
      explanation: 'a condition causing high blood sugar',
    },
    { term: 'arthritis', explanation: 'inflammation of joints' },
    { term: 'osteoporosis', explanation: 'weakening of bones' },
    { term: 'gastritis', explanation: 'inflammation of the stomach lining' },
  ];

  let modifiedText = text;

  // Replace each term with the explained version using a consistent format
  // Format: <term>TERM</term><explanation>EXPLANATION</explanation>
  medicalTerms.forEach(({ term, explanation }) => {
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    modifiedText = modifiedText.replace(
      regex,
      `<term>${term}</term><explanation>${explanation}</explanation>`,
    );
  });

  return modifiedText;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const trackingId = searchParams.get('trackingId');

    if (!trackingId) {
      return NextResponse.json(
        { error: 'Tracking ID is required' },
        { status: 400 },
      );
    }

    if (DUMMY_MODE) {
      // Get the stored document or use a sample one
      const document =
        getDocument(trackingId) ||
        'The patient presents with hypertension and dyspnea. There is a history of myocardial infarction and tachycardia. The patient also has hyperlipidemia and diabetes mellitus.';

      // Check if the ID is very recent (less than 10 seconds old)
      const idTimestamp = Number.parseInt(trackingId.split('-')[1] || '0');
      const isRecent = Date.now() - idTimestamp < 10000;

      if (isRecent) {
        // Still processing
        return NextResponse.json({
          status: 'processing',
          message: 'Your document is still being analyzed',
        });
      }

      // Process complete - return the explained document
      const explainedDocument = addExplanationsToText(document);

      return NextResponse.json({
        status: 'completed',
        result: {
          explanation: explainedDocument,
          terms: [
            { term: 'hypertension', description: 'high blood pressure' },
            { term: 'myocardial infarction', description: 'heart attack' },
            { term: 'dyspnea', description: 'shortness of breath' },
            { term: 'tachycardia', description: 'abnormally rapid heart rate' },
            { term: 'hyperlipidemia', description: 'high cholesterol levels' },
            {
              term: 'diabetes mellitus',
              description: 'a condition causing high blood sugar',
            },
          ],
        },
      });
    }

    // Real API implementation (when DUMMY_MODE is false)
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
    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to check status' },
      { status: 500 },
    );
  }
}
