'use client';

import { Copy, Check, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { demoCases } from '@/lib/demo-data';

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
          <p className="text-sm text-gray-600 mb-4">
            Klik op een snippet om de volledige tekst te kopiëren naar het
            klembord:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {demoCases.map((demoCase) => (
              <div
                key={demoCase.id}
                className="group relative rounded-lg border border-gray-200 bg-gray-50 p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() =>
                  copyToClipboard(demoCase.originalText, demoCase.id)
                }
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-base font-medium text-gray-900">
                    {demoCase.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-7 w-7"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(demoCase.originalText, demoCase.id);
                    }}
                  >
                    {copiedId === demoCase.id ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {getSnippet(demoCase.originalText)}
                </p>
                {copiedId === demoCase.id && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
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
