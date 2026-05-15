import { ArticleCard } from "@/components/blog/article-card";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import type { BlogPost } from "@/lib/blog";

type RelatedArticlesProps = {
  posts: readonly BlogPost[];
};

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="section-shell py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Articoli correlati
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[0.98] text-ivory sm:text-6xl">
            Altri articoli da esplorare
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <ArticleCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
