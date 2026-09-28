import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Instagram, TrendingUp } from "lucide-react";
import PostGrid from "@/components/work/PostGrid";
import Swoosh from "@/components/ui/Swoosh";
import { whatsappHref } from "@/lib/content";
import type { Client } from "@/lib/clients";

/**
 * One client, one screen: the feed on the left reads as an Instagram grid, the
 * right rail carries who they are and what the work moved. The rail sticks on
 * desktop so the numbers stay in view while the grid scrolls.
 */
export default function ClientShowcase({ client }: { client: Client }) {
  return (
    <article className="relative isolate overflow-hidden bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
      <Swoosh className="-z-10 hidden lg:block" d="M-10 880 C 220 810, 380 960, 620 900 S 880 790, 1010 850" animate />

      <div className="container">
        <a href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand">
          <ArrowLeft className="h-4 w-4" /> All work
        </a>

        <header className="mt-8 border-b border-line pb-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand" />
            <span className="eyebrow">{client.industry}</span>
          </div>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h1 className="display text-[52px] sm:text-6xl lg:text-[80px]">{client.name}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted">{client.summary}</p>
          </div>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          {/* Feed */}
          <section aria-label={`Instagram posts for ${client.name}`}>
            <div className="flex items-center justify-between border-b border-line pb-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white">
                  <Instagram className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-semibold tracking-tight">{client.handle}</p>
                  <p className="text-sm text-muted">{client.period}</p>
                </div>
              </div>
              <a
                href={client.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-brand"
              >
                Visit profile <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative mt-10">
              <PostGrid posts={client.posts} handle={client.handle} slug={client.slug} />
            </div>

            <p className="mt-5 text-sm text-muted">
              Tap any post to open it in full, with captions and comments, straight from Instagram.
            </p>
          </section>

          {/* Right rail */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line p-7">
              <h2 className="text-sm text-muted">Results</h2>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8">
                {client.metrics.map((m) => (
                  <div key={m.label}>
                    <dd className="display text-[34px] leading-none">{m.value}</dd>
                    <dt className="mt-2 text-sm text-muted">{m.label}</dt>
                    {m.delta && (
                      <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                        <TrendingUp className="h-3.5 w-3.5" /> {m.delta}
                      </p>
                    )}
                    {m.note && <p className="mt-1.5 text-xs text-muted">{m.note}</p>}
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 rounded-2xl bg-ink p-7 text-white">
              <h2 className="text-sm text-white/50">What we did</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {client.services.map((s) => (
                  <li key={s} className="rounded-full border border-white/20 px-3 py-1.5 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
              <ul className="mt-7 space-y-4 border-t border-white/10 pt-6">
                {client.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-white/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
              Get results like these <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
            </a>
          </aside>
        </div>
      </div>
    </article>
  );
}
