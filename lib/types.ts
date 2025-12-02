export type Category = "CS Education" | "Critical Tech" | "Technology & Society";

export const CATEGORIES: Category[] = [
  "CS Education",
  "Critical Tech",
  "Technology & Society",
];

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  category: Category;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export interface PostMeta {
  slug: string;
  frontmatter: PostFrontmatter;
}
