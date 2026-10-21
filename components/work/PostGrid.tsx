"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Copy, Maximize2, Play, X } from "lucide-react";
import type { Post } from "@/lib/clients";
import { cn } from "@/lib/utils";

/**
 * Always the /p/ form. Instagram serves every media type there, including
 * reels, whereas /reel/<code> 404s for a photo or a carousel. `type` therefore
 * drives the badge on the tile and nothing else, so mislabelling a post costs
 * a wrong icon rather than a dead link.
 */
const postUrl = (p: Post) => (p.shortcode ? `https://www.instagram.com/p/${p.shortcode}/` : null);
const embedUrl = (p: Post) => `${postUrl(p)}embed/captioned/`;

/**
 * Instagram grid: own thumbnails in a 1:1 grid (Instagram blocks hotlinking of
 * its own CDN), with the official post embed loaded on demand in a lightbox.
 * The embed is an iframe, so nothing is fetched until a post is opened and the
 * page stays static-exportable.
 */
/** "01.jpg" resolves against basePath; a value starting with "/" is used as-is. */
const assetSrc = (file: string, basePath: string) => (file.startsWith("/") ? file : `${basePath}/${file}`);

/**
 * Column counts are written out in full because Tailwind only ships classes it
 * can see as literal strings.
 */
const columnClasses = {
  3: "grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2",
  4: "grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2 lg:grid-cols-4",
} as const;

export default function PostGrid({
  posts,
  handle,
  /** Folder the thumbnails and clips sit in, e.g. "/images/work/catch-25". */
  basePath,
  /** Tiles per row at the widest breakpoint. Client pages sit in a narrow column, so they use 3. */
  columns = 3,
}: {
  posts: Post[];
  handle: string;
  basePath: string;
  columns?: 3 | 4;
}) {
  const [active, setActive] = useState<number | null>(null);
  const open = active !== null ? posts[active] : null;

  const move = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + posts.length) % posts.length)),
    [posts.length],
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
      <ul className={cn("grid", columnClasses[columns])}>
        {posts.map((post, i) => (
          <li key={`${post.shortcode}-${i}`}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block aspect-[4/5] w-full overflow-hidden bg-paper text-left"
              aria-label={`Open post: ${post.caption}`}
            >
              {post.thumb ? (
                <Image
                  src={assetSrc(post.thumb, basePath)}
                  alt={post.caption}
                  fill
                  sizes="(min-width: 1024px) 240px, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <span className="absolute inset-0 bg-[radial-gradient(120%_90%_at_25%_0%,rgba(254,91,7,0.28),transparent_65%),linear-gradient(160deg,#f3f3f3,#e4e4e4)]">
                  <span className="display absolute bottom-1 right-2 text-6xl text-black/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              )}

              {post.type !== "post" && (
                <span className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/45 text-white backdrop-blur">
                  {post.type === "reel" ? <Play className="ml-0.5 h-3.5 w-3.5 fill-white" /> : <Copy className="h-3.5 w-3.5" />}
                </span>
              )}

              <span className="absolute inset-0 flex items-center justify-center bg-ink/55 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="inline-flex items-center gap-2">
                  <Maximize2 className="h-4 w-4" aria-hidden /> View post
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Instagram post from ${handle}`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="relative w-full max-w-[420px]">
            <div className="mb-3 flex items-center justify-between text-white">
              <p className="text-sm text-white/70">
                {(active ?? 0) + 1} of {posts.length}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close post"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white">
              {open.video ? (
                <video
                  key={open.video}
                  src={assetSrc(open.video, basePath)}
                  poster={open.thumb ? assetSrc(open.thumb, basePath) : undefined}
                  controls
                  autoPlay
                  playsInline
                  className="h-[70svh] max-h-[720px] w-full bg-black object-contain"
                />
              ) : open.shortcode ? (
                <iframe
                  key={open.shortcode}
                  src={embedUrl(open)}
                  title={open.caption}
                  className="h-[70svh] max-h-[720px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                // No link for this one yet: show its own cover rather than an
                // embed that would 404.
                <Image
                  src={open.thumb ? assetSrc(open.thumb, basePath) : ""}
                  alt={open.caption}
                  width={1080}
                  height={1350}
                  className="h-[70svh] max-h-[720px] w-full bg-paper object-contain"
                />
              )}
            </div>

            <div className="mt-3 flex items-center justify-between gap-4">
              {postUrl(open) ? (
                <a
                  href={postUrl(open) as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-brand"
                >
                  View the full post on Instagram <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <p className="text-sm text-white/60">{open.caption}</p>
              )}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous post"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:bg-brand"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Next post"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:bg-brand"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
