"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Copy, Heart, MessageCircle, Play, X } from "lucide-react";
import type { Post } from "@/lib/clients";

const postUrl = (p: Post) => `https://www.instagram.com/${p.type === "reel" ? "reel" : "p"}/${p.shortcode}/`;
const embedUrl = (p: Post) => `${postUrl(p)}embed/captioned/`;

/**
 * Instagram grid: own thumbnails in a 1:1 grid (Instagram blocks hotlinking of
 * its own CDN), with the official post embed loaded on demand in a lightbox.
 * The embed is an iframe, so nothing is fetched until a post is opened and the
 * page stays static-exportable.
 */
/** "01.jpg" resolves to /images/work/<slug>/01.jpg; a path starting with "/" is used as-is. */
const assetSrc = (file: string, slug: string) => (file.startsWith("/") ? file : `/images/work/${slug}/${file}`);

export default function PostGrid({ posts, handle, slug }: { posts: Post[]; handle: string; slug: string }) {
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
      <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2">
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
                  src={assetSrc(post.thumb, slug)}
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

              {/* Stats reveal, the way Instagram shows them on hover */}
              <span className="absolute inset-0 flex items-center justify-center gap-5 bg-black/55 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {post.stats?.views && (
                  <span className="flex items-center gap-1.5">
                    <Play className="h-4 w-4 fill-white" /> {post.stats.views}
                  </span>
                )}
                {post.stats?.likes && (
                  <span className="flex items-center gap-1.5">
                    <Heart className="h-4 w-4 fill-white" /> {post.stats.likes}
                  </span>
                )}
                {post.stats?.comments && (
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4 fill-white" /> {post.stats.comments}
                  </span>
                )}
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
                  src={assetSrc(open.video, slug)}
                  poster={open.thumb ? assetSrc(open.thumb, slug) : undefined}
                  controls
                  autoPlay
                  playsInline
                  className="h-[70svh] max-h-[720px] w-full bg-black object-contain"
                />
              ) : (
                <iframe
                  key={open.shortcode}
                  src={embedUrl(open)}
                  title={open.caption}
                  className="h-[70svh] max-h-[720px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              )}
            </div>

            <div className="mt-3 flex items-center justify-between gap-4">
              <a
                href={postUrl(open)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-brand"
              >
                View the full post on Instagram <ArrowUpRight className="h-4 w-4" />
              </a>
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
