'use client';

import { ChevronRight, Info, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

import { QuestionsModal } from '@/components/questions-modal';
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
  const [isQuestionsModalOpen, setIsQuestionsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'verslag' | 'samenvatting'>(
    'verslag',
  );
  const [summary, setSummary] = useState<string | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);

  const [extractedTerms, setExtractedTerms] = useState<Bla[]>([]);
  const [summaryTerms, setSummaryTerms] = useState<Bla[]>([]);
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

  // Function to fetch summary from API
  const fetchSummary = async () => {
    if (summary || summaryLoading) return; // Don't fetch if already loaded or loading

    setSummaryLoading(true);
    try {
      const demoMode = isDemoMode() || searchParams.get('demo') === 'true';
      const url = demoMode ? '/api/summarize?demo=true' : '/api/summarize';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          document: result,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Summary API response:', data);

      if (data.state === 'SUCCESS') {
        setSummary(data.result);
        // Extract terms from summary
        const terms = extractTermsFromHtml(data.result);
        setSummaryTerms(terms);
      } else {
        throw new Error('Failed to generate summary');
      }
    } catch (err) {
      console.error('Failed to fetch summary:', err);
      // Fallback to generated summary
      const fallbackSummary = generateSummaryContent(result);
      setSummary(fallbackSummary);
      // Extract terms from fallback summary
      const terms = extractTermsFromHtml(fallbackSummary);
      setSummaryTerms(terms);
    } finally {
      setSummaryLoading(false);
    }
  };

  // Fetch summary when switching to summary tab
  useEffect(() => {
    if (activeTab === 'samenvatting' && result && !summary && !summaryLoading) {
      fetchSummary();
    }
  }, [activeTab, result, summary, summaryLoading]);

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

  // Function to generate summary content from the full result
  const generateSummaryContent = (htmlString: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    const text = tempDiv.textContent || '';

    // Extract key sections
    const sections = {
      patient: '',
      diagnose: '',
      behandeling: '',
      vervolg: '',
      medicatie: '',
    };

    // Extract patient info
    const patientMatch = text.match(/PATIENT[:\s]+([^\n]+)/i);
    if (patientMatch) {
      sections.patient = patientMatch[1].trim();
    }

    // Extract diagnosis
    const diagnoseMatch = text.match(
      /DIAGNOSE[:\s]*([\s\S]*?)(?=BEHANDELING|VERVOLG|MEDICATIE|$)/i,
    );
    if (diagnoseMatch) {
      sections.diagnose = diagnoseMatch[1].trim();
    }

    // Extract treatment
    const behandelingMatch = text.match(
      /BEHANDELING[:\s]*([\s\S]*?)(?=VERVOLG|MEDICATIE|$)/i,
    );
    if (behandelingMatch) {
      sections.behandeling = behandelingMatch[1].trim();
    }

    // Extract follow-up
    const vervolgMatch = text.match(/VERVOLG[:\s]*([\s\S]*?)(?=MEDICATIE|$)/i);
    if (vervolgMatch) {
      sections.vervolg = vervolgMatch[1].trim();
    }

    // Extract medication
    const medicatieMatch = text.match(
      /MEDICATIE[:\s]*([\s\S]*?)(?=VERVOLG|$)/i,
    );
    if (medicatieMatch) {
      sections.medicatie = medicatieMatch[1].trim();
    }

    // Build summary HTML with highlighted terms
    let summaryHtml = '<div class="space-y-6">';

    summaryHtml += '<div class="rounded-lg bg-blue-50 p-4">';
    summaryHtml +=
      '<h3 class="text-lg font-semibold text-blue-900 mb-2">Samenvatting</h3>';
    summaryHtml +=
      '<p class="text-blue-800">Dit is een beknopte samenvatting van uw medisch verslag met de belangrijkste informatie.</p>';
    summaryHtml += '</div>';

    if (sections.patient) {
      summaryHtml += '<div class="rounded-lg bg-white p-4 shadow-sm border">';
      summaryHtml +=
        '<h4 class="font-semibold text-gray-900 mb-2">Patiënt</h4>';
      summaryHtml += `<p class="text-gray-700">${sections.patient}</p>`;
      summaryHtml += '</div>';
    }

    if (sections.diagnose) {
      summaryHtml += '<div class="rounded-lg bg-white p-4 shadow-sm border">';
      summaryHtml +=
        '<h4 class="font-semibold text-gray-900 mb-2">Diagnose</h4>';
      summaryHtml += `<div class="text-gray-700">${highlightTermsInText(sections.diagnose, htmlString)}</div>`;
      summaryHtml += '</div>';
    }

    if (sections.behandeling) {
      summaryHtml += '<div class="rounded-lg bg-white p-4 shadow-sm border">';
      summaryHtml +=
        '<h4 class="font-semibold text-gray-900 mb-2">Behandeling</h4>';
      summaryHtml += `<div class="text-gray-700">${highlightTermsInText(sections.behandeling, htmlString)}</div>`;
      summaryHtml += '</div>';
    }

    if (sections.medicatie) {
      summaryHtml += '<div class="rounded-lg bg-white p-4 shadow-sm border">';
      summaryHtml +=
        '<h4 class="font-semibold text-gray-900 mb-2">Medicatie</h4>';
      summaryHtml += `<div class="text-gray-700">${highlightTermsInText(sections.medicatie, htmlString)}</div>`;
      summaryHtml += '</div>';
    }

    if (sections.vervolg) {
      summaryHtml += '<div class="rounded-lg bg-white p-4 shadow-sm border">';
      summaryHtml +=
        '<h4 class="font-semibold text-gray-900 mb-2">Vervolg</h4>';
      summaryHtml += `<div class="text-gray-700">${highlightTermsInText(sections.vervolg, htmlString)}</div>`;
      summaryHtml += '</div>';
    }

    summaryHtml += '</div>';

    return summaryHtml;
  };

  // Function to highlight terms in text using the original HTML markup
  const highlightTermsInText = (text: string, originalHtml: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalHtml;

    const spans = tempDiv.querySelectorAll(
      'span[data-concept][data-explanation]',
    );
    const termsMap = new Map<
      string,
      { concept: string; explanation: string }
    >();

    spans.forEach((span) => {
      const concept = span.getAttribute('data-concept') || '';
      const explanation = span.getAttribute('data-explanation') || '';
      if (concept && explanation) {
        termsMap.set(concept.toLowerCase(), { concept, explanation });
      }
    });

    // Replace terms in text with highlighted versions
    let processedText = text;
    termsMap.forEach(({ concept, explanation }, key) => {
      const regex = new RegExp(`\\b${concept}\\b`, 'gi');
      processedText = processedText.replace(regex, (match) => {
        return `<span data-concept="${concept}" data-explanation="${explanation}">${match}</span>`;
      });
    });

    return processedText;
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
    <div className="flex h-[calc(100vh-64px)] grow flex-col bg-gray-50">
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
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <h2 className="text-xl font-semibold">
                Jouw medisch verslag verklaard door AI
              </h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Info className="size-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Klik op een gemarkeerde medische term om meer informatie
                      te zien.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex grow gap-4">
              <div className="w-3/4">
                <div className="rounded-lg bg-white pb-4 shadow-md">
                  <div className="flex items-center justify-between border-b border-gray-200 p-4">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setActiveTab('verslag')}
                          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                            activeTab === 'verslag'
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          Medisch verslag
                        </button>
                        <button
                          onClick={() => setActiveTab('samenvatting')}
                          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                            activeTab === 'samenvatting'
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          Samenvatting
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="inline-mode"
                          checked={showInlineDescriptions}
                          onCheckedChange={setShowInlineDescriptions}
                        />
                        <Label htmlFor="inline-mode">
                          Toon uitleg in de tekst
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="h-[calc(100vh-190px)] overflow-auto whitespace-pre-wrap rounded-md p-4 leading-relaxed">
                    {activeTab === 'verslag' ? (
                      renderExplainedText(result)
                    ) : summaryLoading ? (
                      <div className="flex items-center justify-center h-32">
                        <Loader2 className="size-8 animate-spin text-blue-600" />
                        <span className="ml-2 text-gray-600">
                          Samenvatting wordt gegenereerd...
                        </span>
                      </div>
                    ) : (
                      renderExplainedText(
                        summary || generateSummaryContent(result),
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="flex w-1/4 flex-col gap-4">
                <div className="flex flex-col rounded-lg bg-white pb-4 shadow-md">
                  <button
                    onClick={() => setIsQuestionsModalOpen(true)}
                    className="flex items-center justify-between border-b border-gray-200 p-4 text-left transition-colors hover:bg-gray-50"
                  >
                    <h3 className="text-xl font-semibold">Vragen</h3>
                    <ChevronRight className="size-4 text-gray-400" />
                  </button>
                </div>
                {(() => {
                  const currentTerms =
                    activeTab === 'verslag' ? extractedTerms : summaryTerms;
                  return (
                    currentTerms?.length > 0 && (
                      <div className="flex flex-col rounded-lg bg-white pb-4 shadow-md">
                        <h3 className="border-b border-gray-200 p-4 text-xl font-semibold">
                          Medische termen
                        </h3>
                        <div className="h-[calc(100vh-266px)] grow overflow-auto">
                          {currentTerms.map((term: any, index: number) => (
                            <div
                              key={index}
                              ref={(el) => setTermRef(el, term.term)}
                              className={`px-4 py-6 transition-colors duration-300 ${
                                selectedTerm === term.term.toLowerCase()
                                  ? 'bg-blue-200'
                                  : ''
                              } ${
                                index < currentTerms.length - 1
                                  ? 'border-b border-gray-200'
                                  : ''
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
                    )
                  );
                })()}
              </div>
            </div>
          </div>
        )}
      </main>

      <QuestionsModal
        isOpen={isQuestionsModalOpen}
        onClose={() => setIsQuestionsModalOpen(false)}
      />
    </div>
  );
}
