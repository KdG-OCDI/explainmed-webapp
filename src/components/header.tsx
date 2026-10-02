'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { MedicalLetterModal } from '@/components/medical-letter-modal';
import { Button } from '@/components/ui/button';

export function Header() {
  const pathname = usePathname();
  const isResultsPage = pathname.startsWith('/results/');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close the modal once navigation to the new results page has happened
  useEffect(() => {
    setIsModalOpen(false);
  }, [pathname]);

  return (
    <header className="bg-explain-med p-3 text-primary-foreground sm:p-4">
      <div className="container mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">ExplainMed</h1>
        </Link>
        {isResultsPage && (
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <h2 className="text-base font-semibold sm:text-xl">
              Jouw medisch verslag verklaard door AI
            </h2>
            <Button
              type="button"
              variant="secondary"
              className="h-10 touch-manipulation px-4 text-sm font-semibold sm:h-8"
              onClick={() => setIsModalOpen(true)}
            >
              Ander verslag analyseren
            </Button>
          </div>
        )}
      </div>

      {/* Mounted only while open so its state (loading, text) resets each time */}
      {isModalOpen && (
        <MedicalLetterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </header>
  );
}
