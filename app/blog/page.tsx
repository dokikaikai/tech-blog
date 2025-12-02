import { Suspense } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { PostCard } from "@/components/PostCard";
import { getAllPosts, getPostsByCategory } from "@/lib/posts";
import { Category } from "@/lib/types";

export const metadata = {
  title: "Writing",
  description: "All blog posts and articles.",
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

async function PostsList({ category }: { category: Category | null }) {
  const posts = category
    ? await getPostsByCategory(category)
    : await getAllPosts();

  if (posts.length === 0) {
    return (
      <p className="text-muted font-serif py-8">
        No posts in this category yet.
      </p>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const categoryParam = params.category;
  const validCategories = ["CS Education", "Critical Tech", "Technology & Society"];
  const currentCategory = validCategories.includes(categoryParam || "")
    ? (categoryParam as Category)
    : null;

  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <h1 className="font-sans text-4xl font-bold text-white mb-8">Writing</h1>

      <Suspense fallback={null}>
        <CategoryFilter currentCategory={currentCategory} />
      </Suspense>

      <PostsList category={currentCategory} />
    </div>
  );
}
