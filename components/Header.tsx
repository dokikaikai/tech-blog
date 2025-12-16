import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="py-8">
      <nav className="max-w-[680px] mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground hover:opacity-60 transition-opacity"
        >
          Kai Daniels
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Writing
          </Link>
          <Link
            href="/teaching"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Teaching
          </Link>
          <Link
            href="/resume"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Resume
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
