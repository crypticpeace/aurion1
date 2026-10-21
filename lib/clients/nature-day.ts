/**
 * Nature Day
 *
 * Media for this client lives in /public/images/work/nature-day/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 *
 * CHECK: Add industry, summary, post links, handle and the engagement period.
 */

import type { Client } from "./types";
import { draftPosts } from "./types";

const client: Client = {
  slug: "nature-day",
  name: "Nature Day",
  handle: "@natureday",
  industry: "Add industry",
  period: "Ongoing",
  summary:
    "Add one or two lines on what the engagement covered.",
  services: ["Organic social", "Content strategy"],
  outcomes: [
    {
      title: "A clearer brand story",
      body: "Messaging rewritten so the brand reads consistently across the feed, the bio and every campaign.",
    },
    {
      title: "Content with a plan behind it",
      body: "A monthly calendar replaced ad-hoc posting, so each post has a job rather than filling a gap.",
    },
    {
      title: "A recognisable visual system",
      body: "Colour, type and layout are fixed across formats, which is what makes a feed look considered.",
    },
    {
      title: "Add a fourth outcome",
      body: "Replace this with something specific to the engagement.",
    },
  ],
  highlights: [
    "Add a highlight from the work",
    "Add a second highlight",
  ],
  posts: draftPosts(6),
  instagramUrl: "https://www.instagram.com/",
};

export default client;
