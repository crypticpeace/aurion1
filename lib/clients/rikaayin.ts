/**
 * Rikaayin
 *
 * Media for this client lives in /public/images/work/rikaayin/
 *   logo.svg   -> logo, referenced below as logo: "logo.svg"
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 */

import type { Client } from "./types";
import { draftPosts } from "./types";

const client: Client = {
  slug: "rikaayin",
  name: "Rikaayin",
  logo: null,
  handle: "@rikaayin",
  industry: "Add industry",
  period: "",
  summary: "",
  services: ["Add service"],
  metrics: [
    { label: "Followers", value: "0" },
    { label: "Avg. likes per post", value: "0" },
    { label: "Engagement rate", value: "0%" },
    { label: "Add metric", value: "0" },
  ],
  highlights: ["Add a highlight from the work"],
  posts: [
    { shortcode: "DcdbXIdIDz0", type: "reel", thumb: "01.jpg", caption: "Orientation day, in full", stats: { views: "320K" } },
    { shortcode: "DcTIJiHDl-R", type: "carousel", thumb: "02.jpg", caption: "What parents asked us most", stats: { likes: "1.3K" } },
    { shortcode: "Db8BXDzOjYr", type: "post", thumb: "03.jpg", caption: "Results day", stats: { likes: "2.6K" } },
    { shortcode: "DcBGkrtDlL7", type: "carousel", thumb: "04.jpg", caption: "A day in the classroom", stats: { views: "190K" } },
    { shortcode: "Db5X9bZOYPf", type: "reel", thumb: "05.jpg", caption: "Meet the faculty", stats: { likes: "870" } },
    { shortcode: "DbvH5rcuNaj", type: "post", thumb: "06.jpg", caption: "Batch timings and fee structure", stats: { likes: "640" } },
  ],
  instagramUrl: "https://www.instagram.com/",
};

export default client;
