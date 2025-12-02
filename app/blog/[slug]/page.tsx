import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { mdxComponents } from "@/mdx-components";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

const rehypePrettyCodeOptions = {
  theme: "github-dark-dimmed",
  keepBackground: true,
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <article className="max-w-[680px] mx-auto px-6 py-12">
      <Link
        href="/blog"
        className="text-sm text-muted hover:text-foreground transition-colors mb-12 inline-block"
      >
        &larr; Back
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <time className="text-sm text-muted">{formattedDate}</time>
          <span className="text-sm text-muted">·</span>
          <span className="text-sm text-muted">{post.frontmatter.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6 leading-tight">
          {post.frontmatter.title}
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          {post.frontmatter.excerpt}
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
            },
          }}
        />
      </div>
    </article>
  );
}
