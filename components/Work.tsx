"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { whatsappHref, work } from "@/lib/content";

/**
 * Case study cards in their native 9:16 frame on a dark band. Horizontal snap
 * scroll works with touch, trackpad and the arrow buttons. The play badge is
 * the reel affordance; the text link below it is the crawlable route to the
 * case study page.
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
    <section id="work" className="bg-ink py-24 text-white lg:py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            tone="dark"
            label="Case studies"
            title="Success you can see"
            intro="Recent social media, content and performance marketing projects for brands in Mumbai and across India, and the results behind them."
          />
          <div className="flex items-center gap-3">
            <a
              href="/work"
              className="mr-3 hidden items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-brand sm:flex"
            >
              View all case studies <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous case study"
              className="grid h-14 w-14 place-items-center rounded-full border border-white/20 transition-colors hover:border-brand hover:bg-brand"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next case study"
              className="grid h-14 w-14 place-items-center rounded-full border border-white/20 transition-colors hover:border-brand hover:bg-brand"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={track}
        className="no-scrollbar bleed-x mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-[var(--bleed)] pb-4"
      >
        {work.map((item, i) => (
          <li key={item.slug} className="w-[72vw] shrink-0 snap-start sm:w-[300px] lg:w-[320px]">
            <article className="group">
              <a
                href={`/work/${item.slug}`}
                className="block"
                aria-label={`${item.client}: ${item.project}, case study by Aurion Digital`}
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.client} ${item.project} reel by Aurion Digital`}
                      fill
                      sizes="320px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,rgba(254,91,7,0.45),transparent_60%),linear-gradient(160deg,#2a2a2a,#161616)]">
                      <span className="display absolute -bottom-6 -right-2 text-[180px] text-white/[0.06]" aria-hidden>
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
                      <Play className="ml-0.5 h-4 w-4 fill-white" aria-hidden />
                    </span>
                    Watch reel
                  </span>
                </div>
              </a>

              <div className="mt-5 border-t border-white/15 pt-4">
                <h3 className="text-lg font-semibold tracking-tight">{item.client}</h3>
                <p className="mt-1 text-sm text-white/50">{item.project}</p>
                <a
                  href={`/work/${item.slug}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-brand"
                >
                  {item.linkText} <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>
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
                Get a quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
