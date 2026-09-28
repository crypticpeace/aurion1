"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Swoosh from "@/components/ui/Swoosh";
import { Annotation, HandArrow } from "@/components/ui/Annotation";
import { whatsappHref, work } from "@/lib/content";

/**
 * Work reels in their native 9:16 frame on a dark band. Horizontal snap scroll
 * works with touch, trackpad and the arrow buttons.
 */
export default function Work() {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="work" className="relative isolate overflow-hidden bg-ink py-24 text-white lg:py-32">
      <Swoosh className="-z-10 opacity-60" d="M-10 520 C 250 420, 520 620, 700 560 S 920 380, 1010 440" width={1} />

      <div className="container">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            tone="dark"
            label="Selected work"
            title="Success you can see"
            intro="A glimpse into recent projects, campaigns and the stories behind them."
          />
          <div className="flex items-center gap-3">
            <a
              href="/work"
              className="mr-3 hidden items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-brand sm:flex"
            >
              All clients <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous project"
              className="grid h-14 w-14 place-items-center rounded-full border border-white/20 transition-colors hover:border-brand hover:bg-brand"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next project"
              className="grid h-14 w-14 place-items-center rounded-full border border-white/20 transition-colors hover:border-brand hover:bg-brand"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-14">
        <div className="container relative">
          <div className="absolute -top-2 right-8 hidden items-end gap-2 lg:flex">
            <Annotation className="text-white/70" rotate={-6}>
              swipe through
            </Annotation>
            <HandArrow variant="right" className="w-12 text-white/70" />
          </div>
        </div>

        <ul
          ref={track}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto bleed-x scroll-px-[var(--bleed)] pb-4 pt-10"
        >
          {work.map((item, i) => (
            <li key={item.client} className="w-[72vw] shrink-0 snap-start sm:w-[300px] lg:w-[320px]">
              <a href={`/work/${item.slug}`} className="group block">
                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.client}: ${item.project}`}
                      fill
                      sizes="320px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,rgba(254,91,7,0.45),transparent_60%),linear-gradient(160deg,#2a2a2a,#161616)]">
                      <span className="display absolute -bottom-6 -right-2 text-[180px] text-white/[0.06]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs backdrop-blur">
                    {item.category}
                  </span>
                  <span className="absolute bottom-5 left-5 flex items-center gap-3 text-sm font-medium">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-4 w-4 fill-white" />
                    </span>
                    Watch reel
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-white/15 pt-4">
                  <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-brand">{item.client}</h3>
                  <p className="text-right text-sm text-white/50">{item.project}</p>
                </div>
              </a>
            </li>
          ))}

          <li className="w-[72vw] shrink-0 snap-start sm:w-[300px] lg:w-[320px]">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex aspect-[9/16] flex-col justify-between rounded-2xl border border-dashed border-white/25 p-7 transition-colors hover:border-brand hover:bg-brand"
            >
              <span className="eyebrow text-white/60 group-hover:text-white">Next up</span>
              <span>
                <span className="display block text-5xl">Your brand here.</span>
                <span className="mt-6 flex items-center gap-2 text-sm font-medium">
                  Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
