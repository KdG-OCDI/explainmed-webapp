'use client';

import { ChevronRight, Loader2 } from 'lucide-react';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

import { QuestionsModal } from '@/components/questions-modal';
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
  const [originalDocument, setOriginalDocument] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
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

  // Load original document from localStorage on mount
  useEffect(() => {
    if (!trackingId) return;
    const stored = localStorage.getItem(`original_doc_${trackingId}`);
    if (stored) {
      setOriginalDocument(stored);
      console.log('Original document loaded from localStorage');
    } else {
      console.warn('No original document found in localStorage for', trackingId);
    }
  }, [trackingId]);

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
            toast.error('De gevraagde analyse kon niet worden gevonden.', {
              action: {
                label: 'Probeer opnieuw',
                onClick: () => (window.location.href = '/'),
              },
            });
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
          toast.error('Analysis failed. Please try again.', {
            action: {
              label: 'Probeer opnieuw',
              onClick: () => (window.location.href = '/'),
            },
          });
          setLoading(false);
        } else {
          // If still processing, check again after a delay
          setTimeout(checkStatus, 5000);
        }
      } catch (err) {
        console.error('Failed to check status:', err);
        toast.error('Failed to retrieve results. Please try again.', {
          action: {
            label: 'Probeer opnieuw',
            onClick: () => (window.location.href = '/'),
          },
        });
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

  // Function to fetch summary from API with polling
  const fetchSummary = async () => {
    if (summary || summaryLoading) return; // Don't fetch if already loaded or loading

    // Check if we have the original document
    if (!originalDocument) {
      console.error('No original document available for summary generation');
      toast.error('Origineel document niet beschikbaar voor samenvatting');
      // Fallback to generated summary from result
      const fallbackSummary = generateSummaryContent(result);
      setSummary(fallbackSummary);
      const terms = extractTermsFromHtml(fallbackSummary);
      setSummaryTerms(terms);
      return;
    }

    setSummaryLoading(true);
    try {
      const demoMode = isDemoMode() || searchParams.get('demo') === 'true';

      // Step 1: Submit the summary request with the ORIGINAL document
      const submitUrl = demoMode
        ? `/api/summarize?demo=true&trackingId=${trackingId}`
        : '/api/summarize';

      console.log('Submitting summary request with original document');
      const submitResponse = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          document: originalDocument, // Use original document instead of result
        }),
      });

      if (!submitResponse.ok) {
        throw new Error(`Error: ${submitResponse.status}`);
      }

      const submitData = await submitResponse.json();
      console.log('Summary submit response:', submitData);

      // If demo mode returns SUCCESS immediately, use it
      if (submitData.state === 'SUCCESS') {
        setSummary(submitData.result);
        const terms = extractTermsFromHtml(submitData.result);
        setSummaryTerms(terms);
        setSummaryLoading(false);
        return;
      }

      // Step 2: Poll for the summary result
      // API returns task_id (with underscore), not id
      const summaryTaskId = submitData.task_id || submitData.id;
      if (!summaryTaskId) {
        throw new Error('No task ID returned from summary API');
      }

      const pollSummaryStatus = async () => {
        try {
          const statusUrl = demoMode
            ? `/api/check-status?trackingId=${summaryTaskId}&demo=true`
            : `/api/check-status?trackingId=${summaryTaskId}`;

          const statusResponse = await fetch(statusUrl);

          if (!statusResponse.ok) {
            throw new Error(`Error: ${statusResponse.status}`);
          }

          const statusData = await statusResponse.json();
          console.log('Summary status check:', statusData);

          if (statusData.state === 'SUCCESS') {
            setSummary(statusData.result);
            const terms = extractTermsFromHtml(statusData.result);
            setSummaryTerms(terms);
            setSummaryLoading(false);
          } else if (statusData.state === 'FAILURE' || statusData.status === 'failed') {
            throw new Error('Summary generation failed');
          } else {
            // Still processing, check again after a delay
            setTimeout(pollSummaryStatus, 5000);
          }
        } catch (pollErr) {
          console.error('Failed to poll summary status:', pollErr);
          throw pollErr;
        }
      };

      // Start polling
      await pollSummaryStatus();

    } catch (err) {
      console.error('Failed to fetch summary:', err);
      toast.error('Fout bij het genereren van de samenvatting');
      // Fallback to generated summary
      const fallbackSummary = generateSummaryContent(result);
      setSummary(fallbackSummary);
      // Extract terms from fallback summary
      const terms = extractTermsFromHtml(fallbackSummary);
      setSummaryTerms(terms);
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
    termsMap.forEach(({ concept, explanation }) => {
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
    <div className="flex h-[calc(100vh-72px)] sm:h-[calc(100vh-64px)] grow flex-col bg-gray-50">
      <main className="mx-2 sm:mx-4 flex grow flex-col py-4 sm:py-6 lg:container lg:mx-auto">
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

        {result && (
          <div className="flex flex-col gap-4">
            <div className="flex grow flex-col gap-4 lg:flex-row">
              <div className="w-full lg:w-3/4">
                <div className="rounded-lg bg-white pb-3 shadow-md">
                  <div className="flex flex-col gap-4 border-b border-gray-200 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
                    <div className="flex items-center gap-2 sm:gap-6">
                      <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
                        <button
                          onClick={() => setActiveTab('verslag')}
                          className={`rounded-md px-2 py-2 text-xs font-medium transition-all duration-200 sm:px-4 sm:text-sm ${activeTab === 'verslag'
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-600 hover:bg-blue-100 hover:text-gray-800'
                            }`}
                        >
                          Bekijk het medisch verslag
                        </button>
                        <button
                          onClick={() => setActiveTab('samenvatting')}
                          className={`rounded-md px-2 py-2 text-xs font-medium transition-all duration-200 sm:px-4 sm:text-sm ${activeTab === 'samenvatting'
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-600 hover:bg-blue-100 hover:text-gray-800'
                            }`}
                        >
                          Lees de samenvatting
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
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
                  <div className="h-[calc(100vh-240px)] sm:h-[calc(100vh-193px)] overflow-auto whitespace-normal leading-loose rounded-md p-3 sm:p-4 text-sm">
                    {activeTab === 'verslag' ? (
                      renderExplainedText(result)
                    ) : summaryLoading ? (
                      <div className="flex h-32 items-center justify-center">
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

              <div className="flex w-full flex-col gap-4 lg:w-1/4">
                <button
                  onClick={() => setIsQuestionsModalOpen(true)}
                  className="flex flex-col items-start rounded-lg border-gray-200 bg-white px-3 py-3 text-left shadow-md transition-colors hover:bg-gray-50 sm:px-4"
                >
                  <div className="flex w-full items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Vragen voor uw arts
                    </h3>
                    <ChevronRight className="size-5 text-gray-400" />
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600">
                    Bekijk hier voorbeeld vragen die je aan je arts kan stellen
                  </p>
                </button>
                {(() => {
                  const currentTerms =
                    activeTab === 'verslag' ? extractedTerms : summaryTerms;
                  return (
                    <div className="flex flex-col rounded-lg bg-white pb-3 shadow-md">
                      <h3 className="border-b border-gray-200 px-3 py-3 text-lg font-semibold sm:px-4 sm:text-xl">
                        Medische termen verklaard
                      </h3>
                      <div className="h-[calc(100vh-360px)] grow overflow-auto text-sm sm:h-[calc(100vh-317px)] lg:h-[calc(100vh-289px)]">
                        {currentTerms?.length > 0 ? (
                          currentTerms.map((term: any, index: number) => (
                            <div
                              key={index}
                              ref={(el) => setTermRef(el, term.term)}
                              className={`p-3 transition-colors duration-300 sm:p-4 ${selectedTerm === term.term.toLowerCase()
                                ? 'bg-blue-200'
                                : ''
                                } ${index < currentTerms.length - 1
                                  ? 'border-b border-gray-200'
                                  : ''
                                }`}
                            >
                              <h4 className="text-sm sm:text-base font-semibold text-blue-700">
                                {term.term}
                              </h4>
                              <p className="text-xs sm:text-sm">{term.description}</p>
                            </div>
                          ))
                        ) : (
                          <div className="flex h-full flex-col items-center justify-center p-4 text-center sm:p-8">
                            <div className="mb-2 text-gray-400">
                              <svg
                                className="mx-auto size-8 sm:size-12"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500">
                              {activeTab === 'verslag'
                                ? 'Geen medische termen gevonden in het verslag'
                                : 'Geen medische termen gevonden in de samenvatting'}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
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
