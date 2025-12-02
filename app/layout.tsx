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
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-8 mt-16">
          <div className="max-w-[800px] mx-auto px-4 text-center text-muted text-sm font-sans">
            <p>&copy; {new Date().getFullYear()} Kai Daniels. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
