import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-explain-med p-4 text-primary-foreground">
      <div className="container mx-auto text-2xl font-bold">
        <Link href="/">
          <h1>ExplainMed</h1>
        </Link>
      </div>
    </header>
  );
}
