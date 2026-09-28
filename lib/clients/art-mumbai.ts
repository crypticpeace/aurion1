/**
 * Art Mumbai
 *
 * Media for this client lives in /public/images/work/art-mumbai/
 *   logo.svg   -> logo, referenced below as logo: "logo.svg"
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "art-mumbai",
  name: "Art Mumbai",
  logo: null,
  handle: "@artmumbai",
  industry: "Art and events",
  period: "Oct 2025 to Dec 2025",
  summary:
    "Brand content across the run-up to the fair: artist features, walkthroughs and on-ground coverage built for a culture-first audience.",
  services: ["Brand content", "On-ground coverage", "Organic social"],
  metrics: [
    { label: "Followers", value: "96K", delta: "+21K", note: "during the fair window" },
    { label: "Avg. likes per post", value: "1.7K", delta: "+44%" },
    { label: "Engagement rate", value: "6.2%", delta: "+2.4 pts" },
    { label: "Profile visits", value: "310K", note: "fair month" },
  ],
  highlights: [
    "Daily edit cycle during the fair with same-day publishing",
    "Artist features repurposed into carousels and stories",
    "Coverage format now reused for every edition",
  ],
  posts: [
    { shortcode: "REPLACE_1", type: "reel", thumb: null, caption: "Opening day walkthrough", stats: { views: "410K" } },
    { shortcode: "REPLACE_2", type: "carousel", thumb: null, caption: "Five works to see before you leave", stats: { likes: "2.2K" } },
    { shortcode: "REPLACE_3", type: "post", thumb: null, caption: "Artist in focus", stats: { likes: "1.4K" } },
    { shortcode: "REPLACE_4", type: "reel", thumb: null, caption: "Behind the install", stats: { views: "280K" } },
    { shortcode: "REPLACE_5", type: "post", thumb: null, caption: "Collector preview evening", stats: { likes: "1.1K" } },
    { shortcode: "REPLACE_6", type: "carousel", thumb: null, caption: "Where to start if it is your first fair", stats: { likes: "1.9K" } },
  ],
  instagramUrl: "https://www.instagram.com/artmumbai/",
};

export default client;
