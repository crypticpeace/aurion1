/**
 * Shared types for client case studies. One file per client lives beside this
 * one in /lib/clients, and index.ts collects them into the site.
 */

export type Metric = {
  label: string;
  value: string;
  /** Optional change note, e.g. "+38% in 90 days" */
  delta?: string;
  note?: string;
};

export type Post = {
  /** The id in the post URL: instagram.com/p/<shortcode>/ or /reel/<shortcode>/ */
  shortcode: string;
  /** "reel" adds the play badge and uses the reel URL */
  type: "post" | "reel" | "carousel";
  /** File name inside /public/images/work/<slug>/, or a full path starting with "/" */
  thumb: string | null;
  /**
   * Optional self-hosted clip (MP4, H.264, under ~10MB) in the same folder,
   * e.g. "01.mp4". When set, the lightbox plays this file instead of loading the
   * Instagram embed, so the reel still plays if a visitor blocks Instagram.
   */
  video?: string | null;
  caption: string;
  stats?: { likes?: string; comments?: string; views?: string };
};

export type Client = {
  slug: string;
  name: string;
  /**
   * Logo shown on the /work index. File name inside /public/images/work/<slug>/
   * (e.g. "logo.svg"), or a full path starting with "/". SVG or transparent PNG,
   * roughly 400px wide. Leave null to show the client name set in type instead.
   */
  logo?: string | null;
  handle: string;
  industry: string;
  period: string;
  summary: string;
  services: string[];
  metrics: Metric[];
  highlights: string[];
  posts: Post[];
  instagramUrl: string;
  websiteUrl?: string;
};

/**
 * Placeholder tiles so a new client's page looks complete before the real posts
 * are in. Replace each shortcode, thumb and caption as the content is collected.
 */
export const draftPosts = (count = 6): Post[] =>
  Array.from({ length: count }, (_, i) => ({
    shortcode: `REPLACE_${i + 1}`,
    type: "post" as const,
    thumb: null,
    caption: "Add caption",
  }));
