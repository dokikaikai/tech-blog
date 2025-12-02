import Link from "next/link";
import { PostMeta } from "@/lib/types";

interface PostCardProps {
  post: PostMeta;
}

const categoryColors: Record<string, string> = {
  "CS Education": "bg-blue-900/30 text-blue-300 border-blue-700/50",
  "Critical Tech": "bg-red-900/30 text-red-300 border-red-700/50",
  "Technology & Society": "bg-purple-900/30 text-purple-300 border-purple-700/50",
};

export function PostCard({ post }: PostCardProps) {
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
    <article className="group py-6 border-b border-border last:border-b-0">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex items-center gap-3 mb-2">
          <time className="text-sm text-muted font-sans">{formattedDate}</time>
          <span
            className={`text-xs px-2 py-0.5 rounded border font-sans ${categoryClass}`}
          >
            {post.frontmatter.category}
          </span>
        </div>
        <h2 className="font-sans text-xl font-semibold text-white mt-1 group-hover:text-accent transition-colors">
          {post.frontmatter.title}
        </h2>
        <p className="font-serif text-muted mt-2 leading-relaxed">
          {post.frontmatter.excerpt}
        </p>
      </Link>
    </article>
  );
}
