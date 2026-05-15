import { notFound } from "next/navigation";

import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { RelatedArticles } from "@/components/blog/related-articles";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SurfaceCard } from "@/components/ui/surface-card";
import { buildMetadata } from "@/lib/metadata";
import {
  getAllBlogCategories,
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Articolo non trovato",
      description: "Questo articolo non è disponibile.",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const categories = getAllBlogCategories();
  const relatedPosts = getRelatedPosts(post);

  return (
    <main>
      <PageHero
        eyebrow={post.readingTime}
        title={post.title}
        subtitle={post.excerpt}
        accentNumber="9"
      />

      <section className="section-shell py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <SurfaceCard className="p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap gap-3 text-sm text-ivory/62">
                <span>{post.publishedAt}</span>
                <span>·</span>
                <span className="uppercase tracking-[0.18em] text-gold">
                  {post.category.replace(/-/g, " ")}
                </span>
              </div>

              <div className="mt-8 space-y-10">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-display text-4xl leading-tight text-ivory">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-5 text-base leading-8 text-ivory/80 sm:text-lg">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </SurfaceCard>

            <BlogSidebar categories={categories} activeCategory={post.category} />
          </div>
        </Container>
      </section>

      <RelatedArticles posts={relatedPosts} />
    </main>
  );
}
