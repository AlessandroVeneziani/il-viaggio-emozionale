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
          <div className="mx-auto flex max-w-[1160px] items-center gap-4 rounded-[18px] border border-gold/10 bg-[#131313]/58 px-5 py-1.5 shadow-[0_10px_26px_rgba(0,0,0,0.14)] backdrop-blur-[4px]">
            <BrandMark compact className="shrink-0" />
            <nav className="ml-auto flex items-center gap-4">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-[0.84rem] font-semibold tracking-[0.01em] text-ivory/82 transition hover:text-gold xl:text-[0.88rem]",
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
          <div className="flex items-center justify-between rounded-[18px] border border-gold/10 bg-[linear-gradient(180deg,rgba(39,32,26,0.78),rgba(27,23,20,0.72))] px-4 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.14)] backdrop-blur-[10px]">
            <BrandMark compact className="max-w-[70%]" />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/12 bg-ivory/[0.03] text-gold transition duration-300 hover:bg-ivory/[0.05]"
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
            "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,167,94,0.12),transparent_34%),linear-gradient(180deg,rgba(32,27,22,0.54),rgba(19,16,14,0.74))] backdrop-blur-[18px] transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "texture-paper absolute inset-x-4 bottom-4 top-24 overflow-y-auto rounded-[28px] border border-gold/10 bg-[linear-gradient(180deg,rgba(56,47,39,0.66),rgba(25,21,18,0.78))] px-6 py-8 shadow-[0_20px_46px_rgba(0,0,0,0.22)] backdrop-blur-[22px] transition-all duration-500",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
          <div className="pointer-events-none absolute inset-x-10 top-8 h-28 rounded-full bg-gold/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute inset-x-14 bottom-10 h-24 rounded-full bg-ivory/[0.04] blur-2xl" />
          <nav className="relative z-10 flex flex-col gap-3">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative rounded-[22px] border border-transparent px-5 py-4 text-[1.15rem] font-semibold text-ivory/88 transition duration-300 hover:bg-ivory/[0.03] hover:text-gold",
                    active && "bg-ivory/[0.045] text-gold",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="relative z-10 mt-10 border-t border-gold/10 pt-7">
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
