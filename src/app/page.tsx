'use client';

import { useState } from 'react';

import { MedicalLetterModal } from '@/components/medical-letter-modal';
import { PrivacyModal } from '@/components/privacy-modal';
import { Button } from '@/components/ui/button';
import { usePrivacy } from '@/lib/privacy-context';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const { hasAcceptedCookies, acceptCookies } = usePrivacy();

  return (
    <div className="flex grow flex-col">
      {/* Hero section with gradient background */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-48 text-white">
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
            onClick={() => {
              if (hasAcceptedCookies === null) {
                setIsPrivacyModalOpen(true);
              } else if (hasAcceptedCookies === true) {
                setIsModalOpen(true);
              }
            }}
            className="rounded-lg bg-white px-8 py-6 text-lg font-semibold text-blue-600 hover:bg-blue-50"
          >
            Aan de slag
          </Button>
        </div>
      </section>

      {/* Features section */}
      <section className="w-full bg-white px-4 py-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Hoe het werkt
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-5">
              <h3 className="mb-3 text-xl font-semibold">
                1. Laad uw medisch verslag op.
              </h3>
              <p>
                Dit doe je door de tekst van je medisch verslag te kopiëren en
                de tekst in onze beveiligde tool te plakken.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-5">
              <h3 className="mb-3 text-xl font-semibold">
                2. Onze AI analyseert
              </h3>
              <p>
                Onze AI analyseert het verslag en legt complexe medische
                terminologie uit.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-5">
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

      {/* About section */}
      <section className="w-full bg-white px-4 py-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Over ExplainMed
          </h2>

          <div className="space-y-8">
            {/* Wie zijn wij */}
            <div className="rounded-lg bg-blue-50 p-8">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Wie zijn wij?
              </h3>
              <p className="leading-relaxed text-gray-700">
                Wij zijn een team bestaande uit Next Genics, onderzoekers
                verbonden aan Karel de Grote Hogeschool, Universiteit Gent en
                een IT ontwikkelaar van Forcit.
              </p>
            </div>

            {/* Hoe is ExplainMed ontwikkeld */}
            <div className="rounded-lg bg-blue-50 p-8">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Hoe werd ExplainMed ontwikkeld?
              </h3>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>
                  De tool is gebaseerd op een bestaand AI model dat we slimmer
                  hebben gemaakt door het duizenden medische termen aan te leren
                  uit doktersverslagen. Die termen koppelden we aan medische
                  verklaringen uit betrouwbare begrippenlijsten.
                </p>
                <p>
                  We trainden het model nog verder zodat het een heel verslag
                  kan omzetten in een begrijpelijke en samengevatte versie.
                </p>
                <p>
                  ExplainMed is veilig in gebruik omdat de tool geen medische
                  gegevens opslaat (zie meer informatie in het{' '}
                  <a
                    href="/privacy"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Privacybeleid
                  </a>
                  ).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="w-full bg-gray-50 px-4 py-8">
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

      {/* Privacy modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}
