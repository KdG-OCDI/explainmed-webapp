'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
          <h2 className="text-xl font-semibold">
            Jouw medisch verslag verklaard door AI
          </h2>
        )}
      </div>
    </header>
  );
}
