'use client';

import { Info, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { isDemoMode } from '@/lib/demo-mode';

interface Bla {
  term: string;
  description: string;
}

export default function ResultsPage() {
  const { trackingId } = useParams();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [showInlineDescriptions, setShowInlineDescriptions] = useState(false);
  const [showMedicalTerms, setShowMedicalTerms] = useState(true);
  const [showHelpfulQuestions, setShowHelpfulQuestions] = useState(true);

  const [extractedTerms, setExtractedTerms] = useState<Bla[]>([]);
  const termRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (!trackingId) return;

    const checkStatus = async () => {
      try {
        const demoMode = isDemoMode() || searchParams.get('demo') === 'true';
        const url = demoMode
          ? `/api/check-status?trackingId=${trackingId}&demo=true`
          : `/api/check-status?trackingId=${trackingId}`;

        const response = await fetch(url);

        if (!response.ok) {
          if (response.status === 404) {
            setError('The requested analysis could not be found.');
            setLoading(false);
            return;
          }
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (data.state === 'SUCCESS') {
          setResult(data.result);

          if (data.result) {
            const terms = extractTermsFromHtml(data.result);
            setExtractedTerms(terms);
          }

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
  }, [trackingId, searchParams]);

  useEffect(() => {
    if (selectedTerm && termRefs.current[selectedTerm]) {
      const termElement = termRefs.current[selectedTerm];
      const containerElement = termElement.closest('.overflow-auto');

      if (containerElement) {
        // Cast naar HTMLElement om toegang te krijgen tot offsetTop
        const container = containerElement as HTMLElement;
        const termRect = termElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Calculate the scroll position to center the term in the container
        const scrollTop =
          termElement.offsetTop -
          container.offsetTop -
          containerRect.height / 2 +
          termRect.height / 2;

        // Scroll only the container
        container.scrollTo({
          top: scrollTop,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedTerm]);

  // Function to handle term click
  const handleTermClick = (term: string) => {
    setSelectedTerm(term);
  };

  // Function to set ref for a term
  const setTermRef = (el: HTMLDivElement | null, term: string) => {
    termRefs.current[term.toLowerCase()] = el;
  };

  // Function to extract terms and explanations from the HTML string
  const extractTermsFromHtml = (htmlString: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    const spans = tempDiv.querySelectorAll(
      'span[data-concept][data-explanation]',
    );

    const termsMap = new Map<string, string>();

    spans.forEach((span) => {
      const term = span.getAttribute('data-concept') || '';
      const explanation = span.getAttribute('data-explanation') || '';

      if (term && explanation) {
        termsMap.set(term.toLowerCase(), explanation);
      }
    });

    // Convert map to array and sort alphabetically
    return Array.from(termsMap).map(([term, description]) => ({
      term,
      description,
    }));
  };

  // Function to render the explained text with proper formatting and click handlers
  const renderExplainedText = (text: string) => {
    if (!text) return null;

    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;

    // List of void elements that cannot have children
    const voidElements = [
      'br',
      'img',
      'input',
      'hr',
      'meta',
      'link',
      'source',
      'area',
      'base',
      'col',
      'embed',
      'param',
      'track',
      'wbr',
    ];

    // Process the HTML to create React elements
    const processNode = (node: Node): React.ReactNode => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const tagName = element.tagName.toLowerCase();

        // Handle the new format with data-concept and data-explanation attributes
        if (
          element.tagName.toLowerCase() === 'span' &&
          element.hasAttribute('data-concept') &&
          element.hasAttribute('data-explanation')
        ) {
          const concept = element.getAttribute('data-concept') || '';
          const explanation = element.getAttribute('data-explanation') || '';

          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    className="cursor-pointer font-bold text-blue-600 hover:underline"
                    onClick={() => handleTermClick(concept.toLowerCase())}
                  >
                    {element.textContent}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{explanation}</p>
                </TooltipContent>
              </Tooltip>
              {showInlineDescriptions && (
                <span className="mx-1 rounded bg-blue-50 px-1 text-sm text-blue-800">
                  ({explanation})
                </span>
              )}
            </TooltipProvider>
          );
        }

        // Process child nodes
        // Special handling for void elements (like <br>)
        if (voidElements.includes(tagName)) {
          return React.createElement(tagName, { key: Math.random() });
        }

        // Process child nodes for non-void elements
        const children = Array.from(element.childNodes).map((child, i) => (
          <React.Fragment key={i}>{processNode(child)}</React.Fragment>
        ));

        return React.createElement(tagName, { key: Math.random() }, children);
      }

      return null;
    };

    // Process the entire document
    const processedContent = Array.from(tempDiv.childNodes).map((node, i) => {
      const child = node;
      return <React.Fragment key={i}>{processNode(child)}</React.Fragment>;
    });

    return <>{processedContent}</>;
  };

  return (
    <div className="flex min-h-screen grow flex-col bg-gray-50">
      <main className="container mx-auto flex grow flex-col py-6">
        {loading && (
          <div className="flex grow flex-col items-center justify-center py-12">
            <Loader2 className="mb-4 size-12 animate-spin text-blue-600" />
            <p className="text-lg text-gray-600">
              Uw medisch verslag wordt verwerkt.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Dit kan tot een minuut duren.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4">
            <p className="text-red-600">{error}</p>
            <Button asChild className="mt-4">
              <Link href="/">Probeer opnieuw</Link>
            </Button>
          </div>
        )}

        {result && (
          <div className="flex grow gap-4">
            <div className="w-3/4">
              <div className="rounded-lg bg-white pb-4 shadow-md">
                <div className="flex items-center justify-between border-b border-gray-100 p-4">
                  <div className="flex items-center ">
                    <h3 className="text-xl font-semibold">
                      Jouw medisch verslag gegenereerd door AI
                    </h3>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="ml-2 text-gray-400 hover:text-gray-600">
                            <Info className="size-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Klik op een gemarkeerd begrip om meer uitleg te
                            krijgen.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="inline-mode"
                        checked={showInlineDescriptions}
                        onCheckedChange={setShowInlineDescriptions}
                      />
                      <Label htmlFor="inline-mode">Toon uitleg inline</Label>
                    </div>

                    <Link
                      href="/"
                      className="flex items-center text-sm text-blue-600 underline hover:text-blue-800"
                    >
                      Analyseer een ander verslag
                    </Link>
                  </div>
                </div>
                <div className="h-[calc(100vh-200px)] overflow-auto whitespace-pre-wrap rounded-md p-4 leading-relaxed">
                  {renderExplainedText(result)}
                </div>
              </div>
            </div>

            <div className="w-1/4">
              <div className="flex flex-col rounded-lg bg-white pb-4 shadow-md">
                {extractedTerms?.length > 0 && (
                  <>
                    <h3 className="border-b border-gray-100 p-4 text-xl font-semibold">
                      Medische termen
                    </h3>
                    <div className="h-[calc(100vh-200px)] grow overflow-auto p-4">
                      <div className="space-y-4">
                        {extractedTerms.map((term: any, index: number) => (
                          <div
                            key={index}
                            ref={(el) => setTermRef(el, term.term)}
                            className={`rounded-md p-4 transition-colors duration-300 ${
                              selectedTerm === term.term.toLowerCase()
                                ? 'border-l-4 border-blue-600 bg-blue-100'
                                : 'bg-gray-50'
                            }`}
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
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
