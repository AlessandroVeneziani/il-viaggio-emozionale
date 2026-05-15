import Link from "next/link";

import { SurfaceCard } from "@/components/ui/surface-card";
import type { BlogPost } from "@/lib/blog";

type ArticleCardProps = {
  post: BlogPost;
};

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <SurfaceCard className="h-full p-7 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
        {post.readingTime} · {post.publishedAt}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-tight text-ivory">
        <Link href={`/blog/${post.slug}`} className="transition hover:text-gold">
          {post.title}
        </Link>
      </h2>
      <p className="mt-4 text-base leading-8 text-ivory/78">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between border-t border-gold/15 pt-5">
        <Link
          href={`/blog/categoria/${post.category}`}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-gold transition hover:text-ivory"
        >
          {post.category.replace(/-/g, " ")}
        </Link>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-ivory/86 transition hover:text-gold"
        >
          Leggi l&apos;articolo
        </Link>
      </div>
    </SurfaceCard>
  );
}
