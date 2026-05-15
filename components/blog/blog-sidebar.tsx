import Link from "next/link";

import { SurfaceCard } from "@/components/ui/surface-card";
import type { BlogCategory } from "@/lib/blog";

type BlogSidebarProps = {
  categories: readonly BlogCategory[];
  activeCategory?: string;
};

export function BlogSidebar({
  categories,
  activeCategory,
}: BlogSidebarProps) {
  return (
    <div className="space-y-5">
      <SurfaceCard className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          Categorie
        </p>
        <div className="mt-5 space-y-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/categoria/${category.slug}`}
              className={`block rounded-[18px] border px-4 py-4 transition ${
                activeCategory === category.slug
                  ? "border-gold/35 bg-ivory/[0.05] text-ivory"
                  : "border-gold/10 bg-transparent text-ivory/74 hover:border-gold/20 hover:bg-ivory/[0.03]"
              }`}
            >
              <p className="font-semibold">{category.label}</p>
              <p className="mt-2 text-sm leading-6 opacity-80">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          Navigazione interna
        </p>
        <div className="mt-5 space-y-3 text-sm leading-7 text-ivory/76">
          <p>Ogni articolo è pensato per collegarsi ai percorsi principali del sito.</p>
          <p>Così il blog resta utile per SEO ma anche per conversione e orientamento.</p>
        </div>
      </SurfaceCard>
    </div>
  );
}
