import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border">
      <nav className="max-w-[800px] mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-sans text-xl font-bold text-white hover:text-accent transition-colors"
        >
          Kai Daniels
        </Link>

        <div className="flex gap-6">
          <Link
            href="/blog"
            className="font-sans text-foreground hover:text-accent transition-colors"
          >
            Writing
          </Link>
          <Link
            href="/about"
            className="font-sans text-foreground hover:text-accent transition-colors"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
