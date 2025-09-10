'use client';

import { useState } from 'react';

import { MedicalLetterModal } from '@/components/medical-letter-modal';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex grow flex-col">
      {/* Hero section with gradient background */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-20 text-white">
        <div className="container mx-auto max-w-5xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Medische verslagen in heldere taal
          </h1>
          <p className="mb-8 max-w-3xl text-xl">
            Onze AI-gestuurde tool helpt u complexe medische brieven te
            begrijpen door medische termen uit te leggen en duidelijke
            samenvattingen te geven van diagnoses, behandelingen en
            aanbevelingen.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="rounded-lg bg-white px-8 py-6 text-lg font-semibold text-blue-600 hover:bg-blue-50"
          >
            Aan de slag
          </Button>
        </div>
      </section>

      {/* Features section */}
      <section className="w-full bg-white px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Hoe het werkt
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">
                1. Plak uw medisch verslag
              </h3>
              <p>Kopieer en plak uw medisch verslag in onze beveiligde tool.</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">
                2. Onze AI analyseert
              </h3>
              <p>
                Onze AI analyseert het verslag en legt complexe medische
                terminologie uit.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">
                3. Jij krijgt duidelijke uitleg
              </h3>
              <p>
                Ontvang een duidelijke uitleg van diagnoses, behandelingen en
                vervolgstappen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="absolute bottom-0 w-full bg-gray-50 px-4 py-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-600">
              © 2024 ExplainMed. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                Privacybeleid
              </a>
              <a
                href="/terms"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                Algemene voorwaarden
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for medical letter input */}
      <MedicalLetterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
