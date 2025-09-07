// Demo data for user testing - pre-processed medical texts and their results
// This allows consistent testing without API calls

import { promises as fs } from 'fs';
import path from 'path';

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

// File-based storage for demo tracking IDs to demo cases
// This persists across server restarts for demo mode
const DEMO_TRACKING_FILE = path.join(process.cwd(), 'demo-tracking.json');

// Helper function to read demo tracking data from file
async function readDemoTrackingData(): Promise<Record<string, string>> {
  try {
    const data = await fs.readFile(DEMO_TRACKING_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist or is invalid, return empty object
    return {};
  }
}

// Helper function to write demo tracking data to file
async function writeDemoTrackingData(
  data: Record<string, string>,
): Promise<void> {
  try {
    await fs.writeFile(DEMO_TRACKING_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Failed to write demo tracking data:', error);
  }
}

// Debug function to log current state
export async function logDemoTrackingState(): Promise<void> {
  const data = await readDemoTrackingData();
  console.log('Current demo tracking data:', data);
}

// Function to find a demo case by matching text content
export function findDemoCase(medicalText: string): DemoCase | null {
  const normalizedInput = medicalText.toLowerCase().trim();

  for (const demoCase of demoCases) {
    const normalizedDemo = demoCase.originalText.toLowerCase().trim();

    // Check if the input contains key identifying information
    if (
      normalizedInput.includes(demoCase.name.toLowerCase()) ||
      normalizedInput.includes(demoCase.id.replace('-', ' '))
    ) {
      console.log('Found demo case:', demoCase.name);
      return demoCase;
    }

    // Check for partial matches (first few words)
    const inputWords = normalizedInput.split(' ').slice(0, 3);
    const demoWords = normalizedDemo.split(' ').slice(0, 3);

    if (inputWords.some((word) => demoWords.includes(word))) {
      return demoCase;
    }
  }

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
export async function storeDemoTracking(
  trackingId: string,
  demoCaseId: string,
): Promise<void> {
  console.log('Storing demo tracking:', { trackingId, demoCaseId });

  const data = await readDemoTrackingData();
  data[trackingId] = demoCaseId;
  await writeDemoTrackingData(data);

  console.log('Demo tracking data after store:', data);
}

// Function to get demo case by tracking ID
export async function getDemoCaseByTrackingId(
  trackingId: string,
): Promise<DemoCase | null> {
  console.log('Looking for demo case with tracking ID:', trackingId);

  const data = await readDemoTrackingData();
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
