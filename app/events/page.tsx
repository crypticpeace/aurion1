import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Live Event Coverage in Mumbai | Aurion Digital",
  description:
    "On-ground event coverage in Mumbai: photography, reels and same-day edits for art fairs, festivals and design events. See the galleries.",
  alternates: { canonical: "/events" },
};

/**
 * Live events index. Each card opens that event's photo gallery and write-up.
 * The cover image is the first photo in the event's set; until real photographs
 * are added, the card shows the same gradient placeholder the galleries use.
 */
export default function EventsIndex() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
          <div className="container">
            <SectionHeading
              as="h1"
              label="Live events"
              title="Events we cover on the ground"
              intro="Art fairs, festivals and design events across Mumbai, shot and edited as they happen so the coverage goes out while people can still act on it."
            />

            <ul className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
              {events.map((event) => {
                // An explicit `cover` wins: each event has a 4:3 brand panel built
                // from its logo on its own background colour, so the card fills
                // edge to edge. Otherwise fall back to the first reel thumbnail,
                // then the first photograph.
                const firstReel = event.reelGroups?.[0]?.reels[0];
                const reelCount = event.reelGroups?.reduce((n, g) => n + g.reels.length, 0) ?? 0;
                const cover =
                  event.cover ??
                  (firstReel ? { file: firstReel.thumb, alt: `${event.name} coverage` } : event.photos[0]);
                const clipCount = event.photos.filter((ph) => ph.video).length;
                const stillCount = event.photos.length - clipCount;
                const groupPhotos =
                  event.reelGroups?.reduce((n, g) => n + (g.photos?.length ?? 0), 0) ?? 0;
                const countLabel = reelCount
                  ? [`${reelCount} reels`, groupPhotos && `${groupPhotos} photos`]
                      .filter(Boolean)
                      .join(" · ")
                  : [clipCount && `${clipCount} clips`, stillCount && `${stillCount} photos`]
                      .filter(Boolean)
                      .join(" · ");
                return (
                  <li key={event.slug}>
                    <article className="group h-full">
                      <a href={`/events/${event.slug}`} className="flex h-full flex-col">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper">
                          {cover?.file ? (
                            <Image
                              src={
                                cover.file.startsWith("/")
                                  ? cover.file
                                  : `/images/events/${event.slug}/${cover.file}`
                              }
                              alt={cover.alt}
                              fill
                              sizes="(min-width: 1024px) 400px, 100vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <span className="absolute inset-0 bg-[radial-gradient(130%_100%_at_25%_0%,rgba(254,91,7,0.28),transparent_64%),linear-gradient(155deg,#f3f3f3,#e2e2e2)]" />
                          )}
                          <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                            <Camera className="h-3.5 w-3.5" aria-hidden /> {countLabel}
                          </span>
                        </div>

                        <div className="mt-6 flex flex-1 flex-col border-t border-line pt-5">
                          <p className="flex flex-wrap items-center gap-2 text-sm text-muted">
                            <span className="font-medium text-brand">{event.kind}</span>
                            <span aria-hidden>·</span>
                            <span>{event.location}</span>
                          </p>
                          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{event.name}</h2>
                          <p className="mt-3 flex-1 leading-relaxed text-muted">{event.excerpt}</p>
                          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-brand">
                            View the gallery <ArrowUpRight className="h-4 w-4" aria-hidden />
                          </span>
                        </div>
                      </a>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
