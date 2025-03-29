'use client';

import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export default function ResultsPage() {
  const { trackingId } = useParams();
  const router = useRouter();
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!trackingId) return;

    const checkStatus = async () => {
      try {
        const response = await fetch(
          `/api/check-status?trackingId=${trackingId}`,
        );

        if (!response.ok) {
          if (response.status === 404) {
            setError('The requested analysis could not be found.');
            setLoading(false);
            return;
          }
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'completed') {
          setResult(data.result);
          setLoading(false);
        } else if (data.status === 'failed') {
          setError('Analysis failed. Please try again.');
          setLoading(false);
        } else {
          // If still processing, check again after a delay
          setTimeout(checkStatus, 5000);
        }
      } catch (err) {
        console.error('Failed to check status:', err);
        setError('Failed to retrieve results. Please try again.');
        setLoading(false);
      }
    };

    checkStatus();
  }, [trackingId]);

  // Function to render the explained text with proper formatting
  const renderExplainedText = (text: string) => {
    if (!text) return null;

    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;

    // Process the HTML to create React elements
    const processNode = (node: Node): React.ReactNode => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;

        if (element.tagName.toLowerCase() === 'term') {
          return (
            <span className="font-bold text-blue-600">
              {element.textContent}
            </span>
          );
        }

        if (element.tagName.toLowerCase() === 'explanation') {
          return (
            <span className="mx-1 rounded bg-blue-100 px-1 text-sm text-blue-800">
              ({element.textContent})
            </span>
          );
        }

        // Process child nodes
        const children = Array.from(element.childNodes).map((child, i) => (
          <React.Fragment key={i}>{processNode(child)}</React.Fragment>
        ));

        return React.createElement(
          element.tagName.toLowerCase(),
          { key: Math.random() },
          children,
        );
      }

      return null;
    };

    // Process the entire document
    const processedContent = Array.from(tempDiv.childNodes).map((node, i) => (
      <React.Fragment key={i}>{processNode(node)}</React.Fragment>
    ));

    return <>{processedContent}</>;
  };

  return (
    <div className="flex min-h-screen grow flex-col bg-gray-50">
      <main className="container mx-auto flex grow flex-col py-8">
        <h2 className="mb-6 text-2xl font-bold">Your Results</h2>

        {loading && (
          <div className="flex grow flex-col items-center justify-center py-12">
            <Loader2 className="mb-4 size-12 animate-spin text-blue-600" />
            <p className="text-lg text-gray-600">
              Analyzing your medical letter...
            </p>
            <p className="mt-2 text-sm text-gray-500">
              This may take up to a minute to complete.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4">
            <p className="text-red-600">{error}</p>
            <Button asChild className="mt-4">
              <Link href="/">Try Again</Link>
            </Button>
          </div>
        )}

        {result && (
          <div className="flex grow gap-4">
            {/* Left side - Explained Letter (3/4 width on large screens) */}
            <div className="w-3/4">
              <div className="h-full rounded-lg bg-white shadow-md">
                <h3 className="border-b border-gray-400 p-4 text-xl font-semibold">
                  Explained Letter
                </h3>
                <div className="max-h-[calc(100vh-250px)] overflow-auto whitespace-pre-wrap rounded-md  p-4 leading-relaxed">
                  {renderExplainedText(result.explanation)}
                </div>
              </div>
            </div>

            {/* Right side - Terms and Button (1/4 width on large screens) */}
            <div className="w-1/4">
              <div className="flex h-full flex-col rounded-lg bg-white p-4 shadow-md">
                {result.terms && result.terms.length > 0 && (
                  <>
                    <h3 className="mb-4 text-xl font-semibold">
                      Medical Terms
                    </h3>
                    <div className="mb-6 max-h-[calc(100vh-350px)] grow overflow-auto">
                      <div className="space-y-4">
                        {result.terms.map((term: any, index: number) => (
                          <div
                            key={index}
                            className="rounded-md bg-gray-50 p-4"
                          >
                            <h4 className="font-semibold text-blue-700">
                              {term.term}
                            </h4>
                            <p>{term.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-auto">
                  <Button asChild className="w-full">
                    <Link href="/">Analyze Another Letter</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
