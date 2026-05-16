"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href === "/percorsi") {
      return [
        "/percorsi",
        "/lettura-evolutiva",
        "/letture-tarocchi",
        "/laboratorio-dell-anima",
        "/meditazioni-guidate",
      ].includes(pathname);
    }

    return pathname === href;
  }

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";

    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 hidden lg:block">
        <Container>
          <div className="mx-auto flex max-w-[1160px] items-center gap-4 rounded-[18px] border border-gold/12 bg-[#131313]/58 px-5 py-1.5 shadow-[0_10px_26px_rgba(0,0,0,0.16)] backdrop-blur-[3px]">
            <BrandMark compact className="shrink-0" />
            <nav className="ml-auto flex items-center gap-4">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-[0.84rem] font-semibold tracking-[0.01em] text-ivory/74 transition hover:text-gold xl:text-[0.88rem]",
                      active && "text-gold",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <ButtonLink href="/contatti" size="sm" className="shrink-0 px-4 py-1.25">
              Inizia il tuo percorso
            </ButtonLink>
          </div>
        </Container>
      </header>

      <header className="fixed inset-x-0 top-4 z-50 lg:hidden">
        <Container>
          <div className="flex items-center justify-between rounded-[18px] border border-gold/12 bg-[#151312]/80 px-4 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.15)] backdrop-blur-[3px]">
            <BrandMark compact className="max-w-[70%]" />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/16 bg-ivory/[0.02] text-gold transition hover:bg-ivory/[0.04]"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/72 backdrop-blur-[2px] transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-4 bottom-4 top-24 overflow-y-auto rounded-[26px] border border-gold/12 bg-[#151312]/94 px-6 py-8 shadow-[0_14px_34px_rgba(0,0,0,0.2)] transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-3">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-[22px] border border-transparent px-5 py-4 text-xl font-semibold text-ivory/88 transition hover:border-gold/14 hover:bg-ivory/[0.025] hover:text-gold",
                    active && "border-gold/16 bg-ivory/[0.035] text-gold",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 border-t border-gold/15 pt-6">
            <ButtonLink
              href="/contatti"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Inizia il tuo percorso
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
