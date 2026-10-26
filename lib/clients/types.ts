/**
 * Shared types for client case studies. One file per client lives beside this
 * one in /lib/clients, and index.ts collects them into the site.
 */

/**
 * What changed for the client, in words rather than figures. Case study pages
 * deliberately carry no follower counts, view counts or percentages: numbers on
 * a public page have to be defensible against the client's own dashboard, and
 * these read as claims we can stand behind without one.
 */
export type Outcome = {
  title: string;
  body: string;
};

export type Post = {
  /**
   * The id in the post URL: instagram.com/p/<shortcode>/ or /reel/<shortcode>/.
   * Leave it null for a piece whose cover we have but whose link we do not: the
   * tile still shows in the grid and opens its own image, with no embed and no
   * link out. Fill the shortcode in and it becomes a live post with no other
   * change.
   */
  shortcode: string | null;
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
};

/**
 * A named group of posts, for a client whose work covers several brands
 * (Freelance). The case study then shows one grid per brand instead of a
 * single undifferentiated wall.
 */
export type Collection = {
  name: string;
  note?: string;
  posts: Post[];
};

/**
 * A website built for the client, shown above the Instagram grid on the case
 * study. Screenshots live in /public/images/work/<slug>/ like every other
 * asset. Recapture them when the site is redesigned, or the case study starts
 * showing a version that no longer exists.
 */
export type Website = {
  /** Full URL, used for the link out. */
  url: string;
  /** How the URL reads on the page, e.g. "allthingsdesign.in" (no scheme). */
  label: string;
  /** One or two lines on what was built. */
  blurb: string;
  /** Desktop screenshot, 16:10, e.g. "site-desktop.jpg". */
  desktop: string;
  /** Optional second desktop screenshot, shown smaller beside the first. */
  desktopAlt?: string;
  /** Optional phone screenshot, shown in a device frame. */
  mobile?: string;
};

export type Client = {
  slug: string;
  name: string;
  handle: string;
  /**
   * What the client does, e.g. "Interior design". Leave it out rather than
   * guessing: both places that show it hide the line when it is absent, which
   * reads better than a placeholder on a live client page.
   */
  industry?: string;
  period: string;
  summary: string;
  services: string[];
  outcomes: Outcome[];
  highlights: string[];
  /** Use this for a single grid. For several named grids, use `collections`. */
  posts?: Post[];
  /** When set, the page renders one titled grid per collection and ignores `posts`. */
  collections?: Collection[];
  instagramUrl: string;
  /** Set when we also built the client a website. Renders above the grid. */
  website?: Website;
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
