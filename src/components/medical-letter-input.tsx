'use client';

import { Loader2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function MedicalLetterInput() {
  const [medicalText, setMedicalText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExplain = async () => {
    if (!medicalText.trim()) {
      setError('Please enter a medical letter to explain.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Use our proxy API route instead of directly calling the external API
      const response = await fetch('/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          document: medicalText, // This preserves all formatting including line breaks
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('API response:', data);

      // Here you would handle the response data, perhaps displaying results
      // or navigating to a results page
    } catch (err) {
      console.error('Failed to process medical text:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to process the medical letter. Please try again.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full max-w-3xl flex-col items-center">
      <div className="mb-6 w-full">
        <Textarea
          placeholder="Paste your medical letter here..."
          className="h-[60vh] w-full resize-none text-base shadow-md"
          value={medicalText}
          onChange={(e) => setMedicalText(e.target.value)}
          disabled={isLoading}
        />
      </div>

      {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

      <Button
        onClick={handleExplain}
        className="bg-blue-600 px-8 py-2 text-white hover:bg-blue-700"
        size="lg"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Processing...
          </>
        ) : (
          'Explain'
        )}
      </Button>
    </div>
  );
}
