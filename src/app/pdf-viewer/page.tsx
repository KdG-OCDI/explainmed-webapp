'use client';

import { useState } from 'react';

import { PDFViewer } from '@/components/pdf-viewer';
import { Summary } from '@/components/summary';
import { Terms } from '@/components/terms';
import type { TermsData } from '@/lib/models/pdf.model';

export default function PdfViewerPage() {
  const [summary, setSummary] = useState<string>('');
  const [terms, setTerms] = useState<TermsData[]>([]);

  const handleDataFetched = (newSummary: string, newTerms: TermsData[]) => {
    setSummary(newSummary);
    setTerms(newTerms);
  };

  return (
    <div className="flex grow">
      <div className="w-2/3">
        <PDFViewer
          url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          onDataFetched={handleDataFetched}
        />
      </div>
      <div className="w-1/3 space-y-4 overflow-y-scroll bg-gray-50 p-4">
        <Summary summary={summary} />
        <Terms terms={terms} />
      </div>
    </div>
  );
}
