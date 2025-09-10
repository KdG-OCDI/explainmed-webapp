'use client';

import { Check, Copy, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { demoCases } from '@/lib/demo-data.constants';
import type { DemoCase } from '@/lib/demo-data.util';

interface DemoSnippetsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoSnippetsModal({ isOpen, onClose }: DemoSnippetsModalProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getSnippet = (fullText: string, maxLength: number = 250) => {
    // Simply truncate at maxLength characters
    if (fullText.length <= maxLength) {
      return fullText;
    }
    return fullText.substring(0, maxLength) + '...';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">Demo Teksten</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="grow overflow-auto p-4">
          <p className="mb-4 text-sm text-gray-600">
            Klik op een snippet om de volledige tekst te kopiëren naar het
            klembord:
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {demoCases.map((demoCase: DemoCase) => (
              <div
                key={demoCase.id}
                className="group relative cursor-pointer rounded-lg border border-gray-200 bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                onClick={() =>
                  copyToClipboard(demoCase.originalText, demoCase.id)
                }
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="text-base font-medium text-gray-900">
                    {demoCase.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="size-7 p-1 opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(demoCase.originalText, demoCase.id);
                    }}
                  >
                    {copiedId === demoCase.id ? (
                      <Check className="size-4 text-green-600" />
                    ) : (
                      <Copy className="size-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-600">
                  {getSnippet(demoCase.originalText)}
                </p>
                {copiedId === demoCase.id && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-white">
                    Gekopieerd!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end border-t p-4">
          <Button onClick={onClose} variant="outline" className="px-6 py-2">
            Sluiten
          </Button>
        </div>
      </div>
    </div>
  );
}
