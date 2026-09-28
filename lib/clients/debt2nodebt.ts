/**
 * Debt2NoDebt
 *
 * Media for this client lives in /public/images/work/debt2nodebt/
 *   logo.svg   -> logo, referenced below as logo: "logo.svg"
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 */

import type { Client } from "./types";
import { draftPosts } from "./types";

const client: Client = {
  slug: "debt2nodebt",
  name: "Debt2NoDebt",
  logo: null,
  handle: "@debt2nodebt",
  industry: "Add industry",
  period: "Add period",
  summary: "Add one or two lines on what the engagement covered.",
  services: ["Add service"],
  metrics: [
    { label: "Followers", value: "0" },
    { label: "Avg. likes per post", value: "0" },
    { label: "Engagement rate", value: "0%" },
    { label: "Add metric", value: "0" },
  ],
  highlights: ["Add a highlight from the work"],
  
  posts: [
    { shortcode: "DcDfuIyoLbN", type: "reel", thumb: "01.png", caption: "Orientation day, in full", stats: { views: "320K" } },
    { shortcode: "Dc8U34vjane", type: "carousel", thumb: "02.png", caption: "What parents asked us most", stats: { likes: "1.3K" } },
    { shortcode: "DdTEjN_o3l7", type: "post", thumb: "03.png", caption: "Results day", stats: { likes: "2.6K" } },
    { shortcode: "DQJcqjQEVsA", type: "reel", thumb: "04.png", caption: "A day in the classroom", stats: { views: "190K" } },
    { shortcode: "DdBhRQ7ounK", type: "post", thumb: "05.png", caption: "Meet the faculty", stats: { likes: "870" } },
    { shortcode: "DauWHVWCMz0", type: "carousel", thumb: "06.png", caption: "Batch timings and fee structure", stats: { likes: "640" } },
  ],
  instagramUrl: "https://www.instagram.com/",
};

export default client;
