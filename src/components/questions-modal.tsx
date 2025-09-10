'use client';

import { Copy, Plus, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface QuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const predefinedQuestions = [
  'Wat zijn mijn mogelijkheden? Wat kan ik doen?',
  'Wat zijn de voordelen en nadelen van elke optie?',
  'Wat betekent dit voor mij? Wat is de impact op mijn leven?',
];

export function QuestionsModal({ isOpen, onClose }: QuestionsModalProps) {
  const [customQuestions, setCustomQuestions] = useState<string[]>([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleAddQuestion = () => {
    if (newQuestion.trim() && !customQuestions.includes(newQuestion.trim())) {
      setCustomQuestions([...customQuestions, newQuestion.trim()]);
      setNewQuestion('');
    }
  };

  const handleRemoveQuestion = (index: number) => {
    setCustomQuestions(customQuestions.filter((_, i) => i !== index));
  };

  const handleCopyAll = async () => {
    const allQuestions = [...predefinedQuestions, ...customQuestions];
    const questionsText = allQuestions
      .map((q, i) => `${i + 1}. ${q}`)
      .join('\n');

    try {
      await navigator.clipboard.writeText(questionsText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy questions:', err);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddQuestion();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">Vragen voor uw arts</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="grow overflow-auto p-4">
          <div className="space-y-6">
            {/* Predefined Questions Section */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                Voorgestelde vragen
              </h3>
              <div className="space-y-2">
                {predefinedQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="rounded-md border border-gray-200 bg-gray-50 p-3"
                  >
                    <p className="text-gray-700">{question}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Questions Section */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                Uw eigen vragen
              </h3>

              {/* Add new question */}
              <div className="mb-4 flex gap-2">
                <Input
                  placeholder="Voeg uw eigen vraag toe..."
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                />
                <Button
                  onClick={handleAddQuestion}
                  disabled={!newQuestion.trim()}
                  className="flex h-10 items-center gap-2 px-4"
                >
                  <Plus className="size-4" />
                  Toevoegen
                </Button>
              </div>

              {/* Custom questions list */}
              <div className="space-y-2">
                {customQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-md border border-blue-200 bg-blue-50 p-3"
                  >
                    <p className="text-gray-700">{question}</p>
                    <Button
                      onClick={() => handleRemoveQuestion(index)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:bg-red-100 hover:text-red-800"
                    >
                      <X className="size-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={handleCopyAll}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Copy className="size-4" />
              {copied ? 'Gekopieerd!' : 'Kopieer alle vragen'}
            </Button>
            <Button onClick={onClose} variant="outline">
              Sluiten
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
