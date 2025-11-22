// Simple file-backed store for demo medical documents
// Persists demo submissions to `data/demo-docs.json` so demo data survives
// server restarts in development.

import fs from 'fs';
import path from 'path';

type DocumentStore = {
  [key: string]: string;
};

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'demo-docs.json');

let documents: DocumentStore = {};

// Initialize store by reading existing file (if any). Use synchronous
// operations to keep the API simple and synchronous like before.
try {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (fs.existsSync(FILE_PATH)) {
    const raw = fs.readFileSync(FILE_PATH, 'utf8');
    documents = raw ? JSON.parse(raw) : {};
  } else {
    // Create an empty file
    fs.writeFileSync(FILE_PATH, JSON.stringify({}, null, 2), 'utf8');
    documents = {};
  }
} catch (err) {
  // If anything goes wrong, fall back to an in-memory store but log the error
  // so developers can see what's happening.
  // eslint-disable-next-line no-console
  console.error('Failed to initialize demo document store:', err);
  documents = {};
}

export function storeDocument(id: string, document: string): void {
  documents[id] = document;
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(documents, null, 2), 'utf8');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to persist demo document:', err);
  }
}

export function getDocument(id: string): string | undefined {
  return documents[id];
}
