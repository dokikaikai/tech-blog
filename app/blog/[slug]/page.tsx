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

const categoryColors: Record<string, string> = {
  "CS Education": "bg-blue-900/30 text-blue-300 border-blue-700/50",
  "Critical Tech": "bg-red-900/30 text-red-300 border-red-700/50",
  "Technology & Society": "bg-purple-900/30 text-purple-300 border-purple-700/50",
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

  const categoryClass =
    categoryColors[post.frontmatter.category] ||
    "bg-gray-900/30 text-gray-300 border-gray-700/50";

  return (
    <article className="max-w-[800px] mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="font-sans text-sm text-muted hover:text-accent transition-colors mb-8 inline-block"
      >
        &larr; Back to all posts
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <time className="text-sm text-muted font-sans">{formattedDate}</time>
          <span
            className={`text-xs px-2 py-0.5 rounded border font-sans ${categoryClass}`}
          >
            {post.frontmatter.category}
          </span>
        </div>
        <h1 className="font-sans text-4xl md:text-5xl font-bold text-white mb-4">
          {post.frontmatter.title}
        </h1>
        <p className="font-serif text-xl text-muted leading-relaxed">
          {post.frontmatter.excerpt}
        </p>
      </header>

      <hr className="border-border mb-8" />

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
