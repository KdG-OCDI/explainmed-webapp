// Simple in-memory store for medical documents
// Note: This is for demo purposes only and won't persist across server restarts

type DocumentStore = {
  [key: string]: string;
};

// In-memory store
const documents: DocumentStore = {};

export function storeDocument(id: string, document: string): void {
  documents[id] = document;
}

export function getDocument(id: string): string | undefined {
  return documents[id];
}
