import { Hero } from "@/components/Hero";
import { PostCard } from "@/components/PostCard";
import { getRecentPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const recentPosts = await getRecentPosts(5);

  return (
    <div className="max-w-[800px] mx-auto px-4">
      <Hero />

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-sans text-2xl font-semibold text-white">
            Recent Writing
          </h2>
          <Link
            href="/blog"
            className="font-sans text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View all &rarr;
          </Link>
        </div>

        {recentPosts.length > 0 ? (
          <div>
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted font-serif">No posts yet. Check back soon!</p>
        )}
      </section>
    </div>
  );
}
