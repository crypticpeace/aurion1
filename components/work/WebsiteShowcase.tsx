import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Website } from "@/lib/clients";

/**
 * A website we built for the client, shown above the Instagram grid.
 *
 * The desktop shot sits in a browser frame carrying the real address, so the
 * screenshot reads as a live site rather than a flat mockup. The phone only
 * overlaps the frame from `lg` up, where there is room for it; below that it
 * drops onto its own row, so nothing covers the page at narrow widths.
 */
export default function WebsiteShowcase({ site, basePath }: { site: Website; basePath: string }) {
  const src = (file: string) => (file.startsWith("/") ? file : `${basePath}/${file}`);

  return (
    <section aria-label="Website we designed" className="mt-16 border-t border-line pt-12">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand" />
            <span className="eyebrow">Website we designed</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{site.label}</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">{site.blurb}</p>
        </div>
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 font-medium text-ink transition-colors hover:text-brand"
        >
          Visit the site <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>

      <div className="mt-10 rounded-[24px] bg-paper p-4 sm:p-8 lg:p-12">
        <div className="relative">
          {/* Browser frame */}
          <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_30px_60px_-30px_rgba(22,22,22,0.4)]">
            <div className="flex items-center gap-3 border-b border-line bg-white px-4 py-3">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
              </span>
              <span className="mx-auto max-w-[60%] truncate rounded-full bg-paper px-4 py-1 text-xs text-muted">
                {site.label}
              </span>
            </div>
            <Image
              src={src(site.desktop)}
              alt={`The ${site.label} home page as built`}
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 900px, 100vw"
              className="block w-full"
            />
          </div>

          {/* Phone: overlapping only where there is room for it */}
          {site.mobile && (
            <div className="mt-6 flex justify-center lg:absolute lg:-bottom-6 lg:right-[-28px] lg:mt-0 lg:block">
              <div className="w-[150px] overflow-hidden rounded-[22px] border-[5px] border-ink bg-ink shadow-[0_24px_50px_-20px_rgba(22,22,22,0.55)] sm:w-[170px]">
                <Image
                  src={src(site.mobile)}
                  alt={`${site.label} on a phone`}
                  width={540}
                  height={1169}
                  sizes="170px"
                  className="block w-full rounded-[17px]"
                />
              </div>
            </div>
          )}
        </div>

        {site.desktopAlt && (
          <div className="mt-6 overflow-hidden rounded-xl border border-line lg:mt-10 lg:w-[72%]">
            <Image
              src={src(site.desktopAlt)}
              alt={`A second page of ${site.label}`}
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 650px, 100vw"
              className="block w-full"
            />
          </div>
        )}
      </div>
    </section>
  );
}
