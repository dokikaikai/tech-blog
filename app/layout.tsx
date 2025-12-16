import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kai Daniels",
    template: "%s | Kai Daniels",
  },
  description:
    "Writing about CS education, critical perspectives on technology, and the social implications of the systems we build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="py-8 md:py-12 mt-16 md:mt-24">
          <div className="max-w-[680px] mx-auto px-4 md:px-6 text-center text-muted text-sm">
            <p>&copy; {new Date().getFullYear()} Kai Daniels</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
