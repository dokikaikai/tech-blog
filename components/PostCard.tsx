import Link from "next/link";
import { PostMeta } from "@/lib/types";

interface PostCardProps {
  post: PostMeta;
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <article className="group py-8 border-b border-border last:border-b-0">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex items-center gap-3 mb-3">
          <time className="text-sm text-muted">{formattedDate}</time>
          <span className="text-sm text-muted">·</span>
          <span className="text-sm text-muted">
            {post.frontmatter.category}
          </span>
        </div>
        <h2 className="text-xl font-medium text-foreground group-hover:opacity-60 transition-opacity mb-2">
          {post.frontmatter.title}
        </h2>
        <p className="text-muted leading-relaxed">
          {post.frontmatter.excerpt}
        </p>
      </Link>
    </article>
  );
}
