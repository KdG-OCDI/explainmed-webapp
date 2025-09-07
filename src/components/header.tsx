'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const isResultsPage = pathname.startsWith('/results/');

  return (
    <header className="bg-explain-med p-4 text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">ExplainMed</h1>
        </Link>
        {isResultsPage && (
          <div className="flex gap-2">
            <h2 className="text-xl font-semibold">
              Jouw medisch verslag verklaard door AI
            </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-white hover:text-gray-300">
                    <Info className="size-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Klik op een gemarkeerde medische term om meer informatie te
                    zien.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>
    </header>
  );
}
