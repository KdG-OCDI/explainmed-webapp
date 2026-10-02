// Demo data for user testing - pre-processed medical texts and their results
// This allows consistent testing without API calls

import { demoCases } from './demo-data.constants';

export interface DemoCase {
  id: string;
  name: string;
  originalText: string;
  result: {
    state: 'SUCCESS';
    result: string; // HTML with medical terms highlighted
  };
  summary: {
    state: 'SUCCESS';
    result: string; // HTML summary with medical terms highlighted
  };
}

// Note: We no longer need in-memory storage since we re-match the demo cases
// by finding them from the original document text each time

// Function to find a demo case by matching text content
export function findDemoCase(medicalText: string): DemoCase | null {
  const normalizedInput = medicalText.toLowerCase().trim();

  console.log(
    'Searching for demo case in text:',
    normalizedInput.substring(0, 100) + '...',
  );

  // First, try to find exact patient name matches
  for (const demoCase of demoCases) {
    const patientName = demoCase.name.toLowerCase();

    // Look for the patient name in the text (more specific matching)
    if (normalizedInput.includes(patientName)) {
      console.log('Found demo case by patient name:', demoCase.name);
      return demoCase;
    }
  }

  // If no exact name match, try more sophisticated matching
  for (const demoCase of demoCases) {
    const normalizedDemo = demoCase.originalText.toLowerCase().trim();

    // Extract patient name from the demo case text
    const demoPatientMatch = normalizedDemo.match(/betreft uw patiënt ([^,]+)/);
    if (demoPatientMatch) {
      const demoPatientName = demoPatientMatch[1].trim();

      // Check if input contains this specific patient name
      if (normalizedInput.includes(demoPatientName)) {
        console.log(
          'Found demo case by extracted patient name:',
          demoCase.name,
        );
        return demoCase;
      }
    }
  }

  // Last resort: check for unique identifiers in the text
  for (const demoCase of demoCases) {
    const normalizedDemo = demoCase.originalText.toLowerCase().trim();

    // Look for unique phrases that are specific to each case
    const uniquePhrases = [
      'han solo',
      'obi-wan kenobi',
      'padmé amidala',
      'bail organa',
    ];

    for (const phrase of uniquePhrases) {
      if (normalizedInput.includes(phrase) && normalizedDemo.includes(phrase)) {
        console.log('Found demo case by unique phrase:', demoCase.name);
        return demoCase;
      }
    }
  }

  console.log('No demo case found for input text');
  return null;
}

// Generate a demo tracking ID that embeds the demo case id, so the case can be
// resolved from the ID alone (no server-side storage; works on serverless).
export function generateDemoTrackingId(caseId: string): string {
  const randomPart = Math.random().toString(36).substring(2, 11);
  return `demo-${caseId}-${Date.now()}-${randomPart}`;
}

// Resolve the demo case from a tracking ID created by generateDemoTrackingId
export function findDemoCaseByTrackingId(trackingId: string): DemoCase | null {
  return (
    demoCases.find((demoCase) =>
      trackingId.startsWith(`demo-${demoCase.id}-`),
    ) ?? null
  );
}
