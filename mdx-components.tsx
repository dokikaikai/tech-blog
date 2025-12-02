import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-semibold tracking-tight mt-12 mb-6 text-foreground">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-medium tracking-tight mt-12 mb-4 text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-medium mt-8 mb-3 text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-lg leading-relaxed mb-6 text-foreground">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="underline underline-offset-2 hover:opacity-60 transition-opacity"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="text-lg leading-relaxed mb-6 list-disc pl-6 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-lg leading-relaxed mb-6 list-decimal pl-6 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-foreground">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-foreground pl-6 my-8 text-muted italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 border-border" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  Callout,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
