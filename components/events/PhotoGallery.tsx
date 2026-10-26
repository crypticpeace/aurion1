"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import type { Photo } from "@/lib/events";

const src = (file: string, slug: string) => (file.startsWith("/") ? file : `/images/events/${slug}/${file}`);

/**
 * Masonry photo gallery. Unlike the reel grids, which are uniform 4:5 tiles,
 * every photograph here keeps its own proportions: portrait stays tall, a wide
 * group shot stays wide, and nothing is cropped. CSS columns give the staggered
 * layout with no JavaScript, and each photo reserves its exact height from the
 * intrinsic size in the data, so the page does not jump as images load.
 *
 * One tradeoff of CSS columns: photos read top to bottom within a column
 * rather than left to right across the page.
 *
 * An item can also be a self-hosted clip: set `video` and the tile shows its
 * poster with a play badge, then the lightbox plays the file. These are our own
 * MP4s rather than Instagram embeds, so they work with Instagram blocked.
 */
export default function PhotoGallery({
  photos,
  slug,
  name,
  layout = "masonry",
}: {
  photos: Photo[];
  slug: string;
  name: string;
  /**
   * "masonry" staggers photos at their own proportions. Use "grid" when every
   * item shares one ratio — a set of 9:16 clips, say — because CSS columns
   * balance an even set into ragged columns, while a grid keeps four per row.
   */
  layout?: "masonry" | "grid";
}) {
  const grid = layout === "grid";
  const [active, setActive] = useState<number | null>(null);
  const open = active !== null ? photos[active] : null;

  const move = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, move]);

  return (
    <>
      <ul
        className={
          grid
            ? "grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2 lg:grid-cols-4"
            : "columns-2 gap-1.5 sm:columns-3 sm:gap-2 lg:columns-4"
        }
      >
        {photos.map((photo, i) => {
          const w = photo.width ?? 800;
          const h = photo.height ?? 1000;
          return (
            <li key={`${photo.alt}-${i}`} className={grid ? "" : "mb-1.5 break-inside-avoid sm:mb-2"}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${photo.video ? "Play" : "Open"}: ${photo.alt}`}
                className="group relative block w-full overflow-hidden bg-paper"
              >
                {photo.file ? (
                  <Image
                    src={src(photo.file, slug)}
                    alt={photo.alt}
                    width={w}
                    height={h}
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 50vw"
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <span
                    className="relative block w-full bg-[radial-gradient(130%_100%_at_25%_0%,rgba(254,91,7,0.26),transparent_64%),linear-gradient(155deg,#f3f3f3,#e2e2e2)]"
                    style={{ aspectRatio: `${w} / ${h}` }}
                  >
                    <span className="display absolute bottom-1 right-3 text-5xl text-black/10" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                )}
                {photo.video && (
                  <span className="pointer-events-none absolute inset-0 grid place-items-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-ink/55 text-white backdrop-blur transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5 fill-white" aria-hidden />
                    </span>
                  </span>
                )}
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
              </button>
            </li>
          );
        })}
      </ul>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${name} gallery viewer`}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-ink/90 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="flex w-full max-w-5xl items-center justify-between text-white">
            <p className="text-sm text-white/70">
              {(active ?? 0) + 1} of {photos.length}
            </p>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-ink"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="relative flex w-full max-w-5xl flex-1 items-center justify-center overflow-hidden rounded-2xl bg-ink-800">
            {open.video ? (
              <video
                key={open.video}
                src={src(open.video, slug)}
                poster={open.file ? src(open.file, slug) : undefined}
                controls
                autoPlay
                playsInline
                className="max-h-[70svh] w-auto bg-black"
              />
            ) : open.file ? (
              <Image
                src={src(open.file, slug)}
                alt={open.alt}
                width={1600}
                height={1200}
                className="max-h-[70svh] w-auto object-contain"
              />
            ) : (
              <div className="grid h-[60svh] w-full place-items-center bg-[radial-gradient(120%_90%_at_30%_0%,rgba(254,91,7,0.3),transparent_62%),linear-gradient(160deg,#2a2a2a,#161616)] text-white/60">
                Photo coming soon
              </div>
            )}
          </div>

          <div className="flex w-full max-w-5xl items-center justify-between gap-4 text-white">
            <p className="text-sm text-white/70">{open.alt}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition-colors hover:border-brand hover:bg-brand"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition-colors hover:border-brand hover:bg-brand"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
