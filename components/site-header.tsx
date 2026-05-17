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
          <div className="texture-paper relative mx-auto flex max-w-[1160px] items-center gap-4 overflow-hidden rounded-[18px] border border-[#f3eadb]/18 bg-[linear-gradient(180deg,rgba(78,66,55,0.62),rgba(32,27,23,0.74))] px-5 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,250,241,0.07)] backdrop-blur-[18px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,167,94,0.12),transparent_38%),linear-gradient(180deg,rgba(255,248,238,0.05),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-[#a98a49]/12 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")', backgroundSize: "cover", backgroundPosition: "center top" }} />
            <BrandMark compact className="relative z-10 shrink-0" />
            <nav className="relative z-10 ml-auto flex items-center gap-4">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-[0.84rem] font-semibold tracking-[0.01em] text-ivory/84 transition duration-300 hover:text-[#e2c57f] xl:text-[0.88rem]",
                      active && "text-[#e2c57f]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <ButtonLink
              href="/contatti"
              size="sm"
              className="relative z-10 shrink-0 border border-[#f0e6d4]/14 bg-[linear-gradient(180deg,rgba(201,169,96,0.96),rgba(171,134,62,0.96))] px-4 py-1.5 text-ink shadow-[0_12px_30px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,247,231,0.28)] hover:bg-[linear-gradient(180deg,rgba(214,183,109,0.98),rgba(183,146,73,0.98))]"
            >
              Inizia il tuo percorso
            </ButtonLink>
          </div>
        </Container>
      </header>

      <header className="fixed inset-x-0 top-4 z-50 lg:hidden">
        <Container>
          <div className="texture-paper relative isolate flex items-center justify-between overflow-hidden rounded-[18px] border border-[#f3eadb]/16 bg-[linear-gradient(180deg,rgba(98,84,71,0.68),rgba(52,45,39,0.74))] px-4 py-2.5 shadow-[0_14px_30px_rgba(54,42,31,0.12),inset_0_1px_0_rgba(255,248,238,0.06)] [backface-visibility:hidden] [contain:paint] [transform:translateZ(0)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,167,94,0.14),transparent_42%),linear-gradient(180deg,rgba(255,248,238,0.04),transparent_36%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")', backgroundSize: "cover", backgroundPosition: "center top" }} />
            <BrandMark compact className="relative z-10 max-w-[70%]" />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f0e6d4]/14 bg-ivory/[0.035] text-[#ddb95d] transition duration-300 hover:bg-ivory/[0.05]"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>

      {open ? (
        <div id="mobile-navigation" className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,167,94,0.16),transparent_34%),linear-gradient(180deg,rgba(130,113,95,0.22),rgba(46,39,33,0.34))] backdrop-blur-[18px] saturate-[0.92] transition-opacity duration-500"
            onClick={() => setOpen(false)}
          />
          <div className="texture-paper absolute inset-x-4 bottom-4 top-24 isolate overflow-y-auto rounded-[28px] border border-[#f3eadb]/14 bg-[linear-gradient(180deg,rgba(98,82,68,0.56),rgba(39,33,28,0.68))] px-6 py-8 shadow-[0_22px_42px_rgba(54,42,31,0.16),inset_0_1px_0_rgba(255,248,238,0.05)] backdrop-blur-[20px] transition-all duration-500 [backface-visibility:hidden] [contain:paint] [transform:translateZ(0)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'url("/images/backgrounds/sfondo-numeri.png")',
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            />
            <div className="pointer-events-none absolute inset-x-10 top-8 h-28 rounded-full bg-[#c6a75e]/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-14 bottom-10 h-24 rounded-full bg-ivory/[0.035] blur-2xl" />
            <nav className="relative z-10 flex flex-col gap-3">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                      "relative rounded-[22px] border border-transparent px-5 py-4 text-[1.15rem] font-semibold text-ivory/88 transition duration-300 hover:bg-ivory/[0.028] hover:text-[#e2c57f]",
                      active && "border-[#f0e6d4]/10 bg-ivory/[0.04] text-[#e2c57f]",
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
                className="w-full justify-center border border-[#f0e6d4]/12 bg-[linear-gradient(180deg,rgba(201,169,96,0.96),rgba(171,134,62,0.96))] text-ink shadow-[0_12px_26px_rgba(54,42,31,0.12),inset_0_1px_0_rgba(255,247,231,0.26)] hover:bg-[linear-gradient(180deg,rgba(214,183,109,0.98),rgba(183,146,73,0.98))]"
                onClick={() => setOpen(false)}
              >
                Inizia il tuo percorso
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
