import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Post, PostMeta, PostFrontmatter, Category } from "./types";

const postsDirectory = path.join(process.cwd(), "content/posts");

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(postsDirectory);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(postsDirectory, `${slug}.mdx`);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        frontmatter: data as PostFrontmatter,
      };
    })
  );

  return posts.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });
}

export async function getPostsByCategory(category: Category): Promise<PostMeta[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.frontmatter.category === category);
}

export async function getRecentPosts(count: number = 5): Promise<PostMeta[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, count);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}
