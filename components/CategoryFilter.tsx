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
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`font-sans text-sm px-3 py-1.5 rounded-full border transition-colors ${
          currentCategory === null
            ? "bg-accent text-white border-accent"
            : "text-muted border-border hover:border-accent hover:text-accent"
        }`}
      >
        All
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`font-sans text-sm px-3 py-1.5 rounded-full border transition-colors ${
            currentCategory === category
              ? "bg-accent text-white border-accent"
              : "text-muted border-border hover:border-accent hover:text-accent"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
