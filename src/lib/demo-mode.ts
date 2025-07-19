// Demo mode utilities for managing localStorage state

const DEMO_MODE_KEY = 'explainmed-demo-mode';

export function isDemoMode(): boolean {
  if (typeof window === 'undefined') {
    return false; // Server-side, default to false
  }

  const stored = localStorage.getItem(DEMO_MODE_KEY);
  return stored === 'true';
}

export function setDemoMode(enabled: boolean): void {
  if (typeof window === 'undefined') {
    return; // Server-side, do nothing
  }

  localStorage.setItem(DEMO_MODE_KEY, enabled.toString());
}

export function toggleDemoMode(): boolean {
  const current = isDemoMode();
  const newValue = !current;
  setDemoMode(newValue);
  return newValue;
}

// Function to get demo mode status for server-side rendering
export function getDemoModeFromRequest(request: Request): boolean {
  const url = new URL(request.url);
  return url.searchParams.get('demo') === 'true';
}
