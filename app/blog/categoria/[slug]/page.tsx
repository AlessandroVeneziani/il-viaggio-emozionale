import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/blog/article-card";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/metadata";
import {
  getAllBlogCategories,
  getCategoryBySlug,
  getPostsByCategory,
} from "@/lib/blog";

type BlogCategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return buildMetadata({
      title: "Categoria non trovata",
      description: "Questa categoria non è disponibile.",
      path: `/blog/categoria/${slug}`,
    });
  }

  return buildMetadata({
    title: category.label,
    description: category.description,
    path: `/blog/categoria/${category.slug}`,
  });
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(slug);
  const categories = getAllBlogCategories();

  return (
    <main>
      <PageHero
        eyebrow="Categoria"
        title={category.label}
        subtitle={category.description}
        accentNumber="2"
      />

      <section className="section-shell py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="grid gap-5">
              {posts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
            <BlogSidebar categories={categories} activeCategory={category.slug} />
          </div>
        </Container>
      </section>
    </main>
  );
}
