"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Category, CATEGORIES } from "@/lib/types";

interface CategoryFilterProps {
  currentCategory: Category | null;
}

export function CategoryFilter({ currentCategory }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (category: Category | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`text-sm px-4 py-2 rounded-full transition-all ${
          currentCategory === null
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        All
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`text-sm px-4 py-2 rounded-full transition-all ${
            currentCategory === category
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
