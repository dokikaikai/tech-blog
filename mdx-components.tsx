import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-sans text-4xl font-bold mt-8 mb-4 text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-sans text-3xl font-semibold mt-8 mb-3 text-white">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-sans text-2xl font-medium mt-6 mb-2 text-white">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="font-serif text-lg leading-relaxed mb-4 text-foreground">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="font-serif text-lg leading-relaxed mb-4 list-disc pl-6 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="font-serif text-lg leading-relaxed mb-4 list-decimal pl-6 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-foreground">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent pl-6 py-2 my-6 italic text-muted bg-border/20 rounded-r-lg font-serif">
      {children}
    </blockquote>
  ),
  Callout,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
