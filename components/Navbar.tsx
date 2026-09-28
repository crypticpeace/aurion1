"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { nav, whatsappHref } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open ? "border-b border-line bg-white/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between lg:h-24">
        <a href="/" aria-label="Aurion Digital home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-14 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[17px] text-ink transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden px-12 md:inline-flex"
        >
          Let&apos;s Talk <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="container h-[calc(100svh-5rem)] border-t border-line bg-white pb-10 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display flex items-center justify-between border-b border-line py-6 text-4xl"
              >
                {item.label}
                <ArrowRight className="h-6 w-6 text-brand" strokeWidth={1.5} />
              </a>
            ))}
          </nav>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10 w-full">
            Let&apos;s Talk <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
          </a>
        </div>
      )}
    </header>
  );
}
