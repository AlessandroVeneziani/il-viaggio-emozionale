import type { MetadataRoute } from "next";

import { blogCategories, blogPosts } from "@/content/site-content";
import { navigation, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = navigation.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const ecosystemPages: MetadataRoute.Sitemap = [
    "/soul-design",
    "/meditazioni-guidate",
    "/shop-editoriale",
  ].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  const blogIndex: MetadataRoute.Sitemap[number] = {
    url: new URL("/blog", siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  };

  const categoryPages: MetadataRoute.Sitemap = blogCategories.map((category) => ({
    url: new URL(`/blog/categoria/${category.slug}`, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteConfig.url).toString(),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...ecosystemPages, blogIndex, ...categoryPages, ...posts];
}
