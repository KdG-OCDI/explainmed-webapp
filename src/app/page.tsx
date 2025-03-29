'use client';

import { useState } from 'react';

import { MedicalLetterModal } from '@/components/medical-letter-modal';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen grow flex-col">
      {/* Hero section with gradient background */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-20 text-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Medical Letter Explainer
          </h1>
          <p className="mb-8 text-xl">
            Our AI-powered tool helps you understand complex medical letters by
            explaining medical terms and providing clear summaries of diagnoses,
            treatments, and recommendations.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="rounded-lg bg-white px-8 py-6 text-lg font-semibold text-blue-600 hover:bg-blue-50"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features section */}
      <section className="w-full bg-white px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">
                1. Paste Your Letter
              </h3>
              <p>
                Simply copy and paste your medical letter into our secure tool.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">
                2. Get Explanations
              </h3>
              <p>
                Our AI analyzes the letter and explains complex medical
                terminology.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">
                3. Understand Clearly
              </h3>
              <p>
                Receive a clear breakdown of diagnoses, treatments, and next
                steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for medical letter input */}
      <MedicalLetterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
