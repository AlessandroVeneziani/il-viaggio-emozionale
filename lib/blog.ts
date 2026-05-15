import { blogCategories, blogPosts } from "@/content/site-content";

export type BlogCategory = (typeof blogCategories)[number];
export type BlogPost = (typeof blogPosts)[number];

export function getAllBlogCategories() {
  return blogCategories;
}

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getPostsByCategory(slug: string) {
  return blogPosts.filter((post) => post.category === slug);
}

export function getRelatedPosts(post: BlogPost) {
  return post.relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((item): item is BlogPost => Boolean(item));
}
