import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Instagram } from "lucide-react";
import PostGrid from "@/components/work/PostGrid";
import WebsiteShowcase from "@/components/work/WebsiteShowcase";
import { whatsappHref } from "@/lib/content";
import type { Client } from "@/lib/clients";

/**
 * One client, one screen: the feed on the left reads as an Instagram grid, the
 * right rail carries who they are and what the work moved. The rail sticks on
 * desktop so the numbers stay in view while the grid scrolls.
 */
export default function ClientShowcase({ client }: { client: Client }) {
  // One unnamed group for a plain post list, or one titled grid per collection.
  const groups = client.collections?.length
    ? client.collections
    : [{ name: "", note: undefined as string | undefined, posts: client.posts ?? [] }];

  return (
    <article className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">

      <div className="container">
        <a href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand">
          <ArrowLeft className="h-4 w-4" aria-hidden /> All work
        </a>

        <header className="mt-8 border-b border-line pb-10">
          {client.industry && (
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand" />
              <span className="eyebrow">{client.industry}</span>
            </div>
          )}
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h1 className="display text-[52px] sm:text-6xl lg:text-[80px]">{client.name}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted">{client.summary}</p>
          </div>
        </header>

        {client.website && (
          <WebsiteShowcase site={client.website} basePath={`/images/work/${client.slug}`} />
        )}

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          {/* Feed */}
          <section aria-label={`Instagram posts for ${client.name}`}>
            <div className="flex items-center justify-between border-b border-line pb-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white">
                  <Instagram className="h-5 w-5" strokeWidth={1.75} aria-hidden />
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
                Visit profile <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>

            {groups.map((group, i) => (
              <div key={group.name || i} className={i === 0 ? "mt-10" : "mt-14"}>
                {group.name && (
                  <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line pb-3">
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{group.name}</h3>
                    {group.note && <p className="text-sm text-muted">{group.note}</p>}
                  </div>
                )}
                <PostGrid posts={group.posts} handle={client.handle} basePath={`/images/work/${client.slug}`} />
              </div>
            ))}

            <p className="mt-6 text-sm text-muted">
              Tap any post to open it in full, with captions and comments, straight from Instagram.
            </p>
          </section>

          {/* Right rail */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line p-7">
              <h2 className="text-sm text-muted">What changed</h2>
              <ul className="mt-6 space-y-7">
                {client.outcomes.map((o) => (
                  <li key={o.title}>
                    <h3 className="flex items-start gap-3 text-base font-semibold tracking-tight text-ink">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {o.title}
                    </h3>
                    <p className="mt-1.5 pl-[18px] text-sm leading-relaxed text-muted">{o.body}</p>
                  </li>
                ))}
              </ul>
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
              Get results like these <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </a>
          </aside>
        </div>
      </div>
    </article>
  );
}
