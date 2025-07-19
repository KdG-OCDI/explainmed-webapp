'use client';

import { Info } from 'lucide-react';
import { useEffect, useState } from 'react';

import { isDemoMode } from '@/lib/demo-mode';

export function DemoInstructions() {
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    setShowInstructions(isDemoMode());
  }, []);

  if (!showInstructions) return null;

  return (
    <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
      <div className="flex items-start gap-3">
        <Info className="mt-0.5 size-5 text-blue-600" />
        <div>
          <h3 className="font-semibold text-blue-900">Demo Mode Actief</h3>
          <p className="mt-1 text-sm text-blue-800">
            Voor gebruikstesten zijn de volgende demo teksten beschikbaar:
          </p>
          <ul className="mt-2 text-sm text-blue-800">
            <li>
              • <strong>Bob Dylan</strong> - COPD en longontsteking
            </li>
            <li>
              • <strong>Maria Jansen</strong> - Diabetes type 2
            </li>
            <li>
              • <strong>Jan de Vries</strong> - Hartaanval (STEMI)
            </li>
            <li>
              • <strong>Anna Bakker</strong> - Depressie en angst
            </li>
            <li>
              • <strong>Piet van der Berg</strong> - Prostaatkanker
            </li>
          </ul>
          <p className="mt-2 text-xs text-blue-700">
            Kopieer een van deze teksten en plak deze in het invoerveld voor een
            consistente testervaring.
          </p>
        </div>
      </div>
    </div>
  );
}
