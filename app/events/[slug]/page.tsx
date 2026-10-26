import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import PhotoGallery from "@/components/events/PhotoGallery";
import PostGrid from "@/components/work/PostGrid";
import { events, getEvent } from "@/lib/events";
import { whatsappHref } from "@/lib/content";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = getEvent(params.slug);
  if (!event) return { title: "Live events | Aurion Digital" };
  return {
    title: `${event.name} Coverage | Aurion Digital`,
    description: event.excerpt,
    alternates: { canonical: `/events/${event.slug}` },
  };
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEvent(params.slug);
  if (!event) notFound();

  const others = events.filter((e) => e.slug !== event.slug);
  const reelCount = event.reelGroups?.reduce((n, g) => n + g.reels.length, 0) ?? 0;
  const groupPhotos = event.reelGroups?.reduce((n, g) => n + (g.photos?.length ?? 0), 0) ?? 0;
  // Films and photographs are shown as two separate grids rather than one mixed
  // one: a wall of play badges interleaved with stills reads as a mess, and each
  // grid then steps through its own set in the lightbox.
  const clips = event.photos.filter((p) => p.video);
  const stills = event.photos.filter((p) => !p.video);
  const clipCount = clips.length;
  const stillCount = stills.length;
  const mediaCount = reelCount
    ? `${reelCount} reels${groupPhotos ? ` and ${groupPhotos} photographs` : ""}`
    : [clipCount && `${clipCount} clips`, stillCount && `${stillCount} photographs`]
        .filter(Boolean)
        .join(" and ");

  return (
    <>
      <Navbar />
      <main>
        <article className="bg-white pb-24 pt-32 lg:pt-40">
          <div className="container">
            <a
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden /> All live events
            </a>

            <header className="mt-8 border-b border-line pb-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand" />
                <span className="eyebrow">{event.kind}</span>
              </div>
              <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <h1 className="display text-[48px] sm:text-6xl lg:text-[76px]">{event.name}</h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted">{event.excerpt}</p>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
                <span>{event.location}</span>
                <span aria-hidden>·</span>
                <span>{event.period}</span>
                <span aria-hidden>·</span>
                <span>{mediaCount}</span>
              </p>
            </header>

            {/* Gallery first: the work itself is the point of the page */}
            {event.reelGroups?.length ? (
              <section aria-label={`${event.name} reels`} className="mt-14">
                {event.reelGroups.map((group, i) => (
                  <div key={group.name} className={i === 0 ? "" : "mt-16"}>
                    <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line pb-3">
                      <h2 className="text-lg font-semibold tracking-tight text-ink">{group.name}</h2>
                      {group.note && <p className="text-sm text-muted">{group.note}</p>}
                    </div>
                    <PostGrid
                      posts={group.reels}
                      handle={event.name}
                      basePath={`/images/events/${event.slug}`}
                      columns={4}
                    />
                    {group.photos?.length ? (
                      <div className="mt-8">
                        <h3 className="mb-5 border-b border-line pb-3 text-sm uppercase tracking-eyebrow text-muted">
                          Photographs
                        </h3>
                        <PhotoGallery photos={group.photos} slug={event.slug} name={event.name} />
                      </div>
                    ) : null}
                  </div>
                ))}
                <p className="mt-6 text-sm text-muted">
                  Tap a reel to play it in full, with captions and comments, straight from Instagram.
                  {groupPhotos > 0 && " Tap a photograph to open it at full size."}
                </p>
              </section>
            ) : (
              <section aria-label={`${event.name} gallery`} className="mt-14">
                {clips.length > 0 && (
                  <div>
                    <h2 className="mb-5 border-b border-line pb-3 text-sm uppercase tracking-eyebrow text-muted">
                      Films
                    </h2>
                    <PhotoGallery photos={clips} slug={event.slug} name={event.name} layout="grid" />
                  </div>
                )}
                {stills.length > 0 && (
                  <div className={clips.length ? "mt-16" : ""}>
                    <h2 className="mb-5 border-b border-line pb-3 text-sm uppercase tracking-eyebrow text-muted">
                      Photographs
                    </h2>
                    <PhotoGallery photos={stills} slug={event.slug} name={event.name} />
                  </div>
                )}
                {clipCount > 0 && (
                  <p className="mt-6 text-sm text-muted">
                    Tap a clip to play it, or a photograph to open it at full size.
                  </p>
                )}
              </section>
            )}

            <div className="mt-20 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <section>
                <h2 className="text-sm uppercase tracking-eyebrow text-muted">About the event</h2>
                {event.about.map((para) => (
                  <p key={para.slice(0, 40)} className="mt-6 text-lg leading-relaxed text-muted">
                    {para}
                  </p>
                ))}

                <ul className="mt-10 flex flex-wrap gap-2">
                  {event.services.map((s) => (
                    <li key={s} className="rounded-full border border-line px-3 py-1.5 text-sm text-ink">
                      {s}
                    </li>
                  ))}
                </ul>

                {event.link && (
                  <a
                    href={event.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-brand"
                  >
                    {event.link.label} <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                )}
              </section>

              <section className="rounded-2xl bg-ink p-8 text-white lg:p-10">
                <h2 className="text-sm uppercase tracking-eyebrow text-white/50">What we did</h2>
                <ul className="mt-8 space-y-7">
                  {event.whatWeDid.map((item) => (
                    <li key={item.title}>
                      <h3 className="flex items-start gap-3 text-lg font-semibold tracking-tight">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {item.title}
                      </h3>
                      <p className="mt-2 pl-[18px] leading-relaxed text-white/70">{item.body}</p>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-10 w-full"
                >
                  Cover our event <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </a>
              </section>
            </div>

            {others.length > 0 && (
              <section className="mt-24 border-t border-line pt-12">
                <h2 className="text-sm uppercase tracking-eyebrow text-muted">More live events</h2>
                <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {others.map((e) => (
                    <li key={e.slug} className="bg-white">
                      <a
                        href={`/events/${e.slug}`}
                        className="group flex h-full flex-col p-8 transition-colors hover:bg-brand-50/60"
                      >
                        <span className="text-sm font-medium text-brand">{e.kind}</span>
                        <span className="mt-3 text-xl font-semibold tracking-tight text-ink">{e.name}</span>
                        <span className="mt-2 leading-relaxed text-muted">{e.excerpt}</span>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-brand">
                          View the gallery <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
