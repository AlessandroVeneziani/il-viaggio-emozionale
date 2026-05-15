import { ArticleCard } from "@/components/blog/article-card";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/metadata";
import { getAllBlogCategories, getAllBlogPosts } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Articoli su crescita personale, numerologia evolutiva, tarocchi evolutivi e ricerca simbolica contemporanea.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllBlogCategories();

  return (
    <main>
      <PageHero
        eyebrow="Editoriale"
        title="Blog"
        subtitle="Una struttura SEO-ready per far crescere Il Viaggio Emozionale come piattaforma editoriale dedicata a crescita personale, numerologia evolutiva e letture simboliche contemporanee."
        accentNumber="5"
      />

      <section className="section-shell py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="grid gap-5">
              {posts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
            <BlogSidebar categories={categories} />
          </div>
        </Container>
      </section>
    </main>
  );
}
