export interface PDFData {
  pdfBuffer: string;
  summary: string;
  terms: TermsData[];
}

export interface TermsData {
  id: string;
  term: string;
  description: string;
  source?: string;
}
