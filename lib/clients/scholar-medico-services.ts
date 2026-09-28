/**
 * Scholar Medico Services
 *
 * Media for this client lives in /public/images/work/scholar-medico-services/
 *   logo.svg   -> logo, referenced below as logo: "logo.svg"
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 */

import type { Client } from "./types";
import { draftPosts } from "./types";

const client: Client = {
  slug: "scholar-medico-services",
  name: "Scholar Medico Services",
  logo: null,
  handle: "@scholarmedico",
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
  posts: draftPosts(),
  instagramUrl: "https://www.instagram.com/",
};

export default client;
