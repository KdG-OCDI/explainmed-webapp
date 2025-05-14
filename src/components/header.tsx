import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-explain-med p-4 text-primary-foreground">
      <Link href="/">
        <h1 className="cursor-pointer text-2xl font-bold">ExplainMed</h1>
      </Link>
    </header>
  );
}
