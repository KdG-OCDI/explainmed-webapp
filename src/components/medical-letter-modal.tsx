'use client';

import { Loader2, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { isDemoMode } from '@/lib/demo-mode';

interface MedicalLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MedicalLetterModal({
  isOpen,
  onClose,
}: MedicalLetterModalProps) {
  const router = useRouter();
  const [medicalText, setMedicalText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleExplain = async () => {
    if (!medicalText.trim()) {
      setError('Voer alstublieft een medisch verslag in om te analyseren.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const demoMode = isDemoMode();
      const url = demoMode
        ? '/api/submit-letter?demo=true'
        : '/api/submit-letter';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          document: medicalText,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }

      const data = await response.json();

      // Store the original document in localStorage for later use (summary generation)
      localStorage.setItem(`original_doc_${data.id}`, medicalText);

      // Redirect to results page with the tracking ID
      const resultsUrl = demoMode
        ? `/results/${data.id}?demo=true`
        : `/results/${data.id}`;
      router.push(resultsUrl);
    } catch (err) {
      console.error('Failed to process medical text:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to process the medical letter. Please try again.',
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">Laad uw medisch verslag op.</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            disabled={isLoading}
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="grow overflow-auto">
          <Textarea
            placeholder="Laad uw medisch verslag hier op...."
            className="h-[40vh] w-full resize-none p-4 text-base"
            value={medicalText}
            onChange={(e) => setMedicalText(e.target.value)}
            disabled={isLoading}
          />

          {error && <div className="p-4 text-sm text-red-500">{error}</div>}
        </div>

        <div className="flex justify-end border-t p-4">
          <Button
            onClick={handleExplain}
            className="bg-blue-600 px-8 py-2 text-white hover:bg-blue-700"
            disabled={isLoading || !medicalText.trim()} // Disable if loading or text is empty
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Bezig...
              </>
            ) : (
              'Analyseer mijn verslag'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
