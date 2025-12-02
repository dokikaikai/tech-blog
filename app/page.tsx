import { Hero } from "@/components/Hero";
import { PostCard } from "@/components/PostCard";
import { getRecentPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const recentPosts = await getRecentPosts(5);

  return (
    <div className="max-w-[680px] mx-auto px-6">
      <Hero />

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wide">
            Recent Writing
          </h2>
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            View all
          </Link>
        </div>

        {recentPosts.length > 0 ? (
          <div>
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted">No posts yet. Check back soon!</p>
        )}
      </section>
    </div>
  );
}
