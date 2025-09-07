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
}

// In-memory storage for demo tracking IDs to demo cases
// This is temporary storage that doesn't persist across server restarts
// In production, this should be replaced with a proper database or external storage
const demoTrackingData: Record<string, string> = {};

// Helper function to read demo tracking data from memory
function readDemoTrackingData(): Record<string, string> {
  return { ...demoTrackingData };
}

// Helper function to write demo tracking data to memory
function writeDemoTrackingData(data: Record<string, string>): void {
  Object.assign(demoTrackingData, data);
}

// Debug function to log current state
export function logDemoTrackingState(): void {
  const data = readDemoTrackingData();
  console.log('Current demo tracking data:', data);
}

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

// Function to generate a demo tracking ID
export function generateDemoTrackingId(): string {
  console.log('Generating demo tracking ID');
  var bla = `demo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  console.log('Generated demo tracking ID:', bla);
  return bla;
}

// Function to store mapping between tracking ID and demo case
export function storeDemoTracking(
  trackingId: string,
  demoCaseId: string,
): void {
  console.log('Storing demo tracking:', { trackingId, demoCaseId });

  const data = readDemoTrackingData();
  data[trackingId] = demoCaseId;
  writeDemoTrackingData(data);

  console.log('Demo tracking data after store:', data);
}

// Function to get demo case by tracking ID
export function getDemoCaseByTrackingId(trackingId: string): DemoCase | null {
  console.log('Looking for demo case with tracking ID:', trackingId);

  const data = readDemoTrackingData();
  console.log('Current demo tracking data:', data);

  const demoCaseId = data[trackingId];

  console.log('Found demo case ID:', demoCaseId);

  if (!demoCaseId) {
    console.log('No demo case ID found for tracking ID:', trackingId);
    return null;
  }

  const demoCase = demoCases.find((case_) => case_.id === demoCaseId) || null;
  console.log('Found demo case:', demoCase?.name || 'null');
  return demoCase;
}
