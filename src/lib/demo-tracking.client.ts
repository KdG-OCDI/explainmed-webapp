// Client-side demo tracking utilities using localStorage
// This provides persistence across browser sessions for demo mode

const DEMO_TRACKING_KEY = 'explainmed-demo-tracking';

export interface DemoTrackingData {
  [trackingId: string]: string; // trackingId -> demoCaseId
}

// Get demo tracking data from localStorage
export function getDemoTrackingData(): DemoTrackingData {
  if (typeof window === 'undefined') {
    return {}; // Server-side, return empty object
  }

  try {
    const stored = localStorage.getItem(DEMO_TRACKING_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error(
      'Failed to parse demo tracking data from localStorage:',
      error,
    );
    return {};
  }
}

// Set demo tracking data in localStorage
export function setDemoTrackingData(data: DemoTrackingData): void {
  if (typeof window === 'undefined') {
    return; // Server-side, do nothing
  }

  try {
    localStorage.setItem(DEMO_TRACKING_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to store demo tracking data in localStorage:', error);
  }
}

// Store a single demo tracking entry
export function storeDemoTrackingEntry(
  trackingId: string,
  demoCaseId: string,
): void {
  const data = getDemoTrackingData();
  data[trackingId] = demoCaseId;
  setDemoTrackingData(data);
}

// Get demo case ID by tracking ID
export function getDemoCaseIdByTrackingId(trackingId: string): string | null {
  const data = getDemoTrackingData();
  return data[trackingId] || null;
}

// Clear all demo tracking data
export function clearDemoTrackingData(): void {
  if (typeof window === 'undefined') {
    return; // Server-side, do nothing
  }

  try {
    localStorage.removeItem(DEMO_TRACKING_KEY);
  } catch (error) {
    console.error(
      'Failed to clear demo tracking data from localStorage:',
      error,
    );
  }
}

// Get all tracking IDs
export function getAllTrackingIds(): string[] {
  const data = getDemoTrackingData();
  return Object.keys(data);
}
