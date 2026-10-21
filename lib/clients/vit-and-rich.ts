/**
 * Vit and Rich
 *
 * Media for this client lives in /public/images/work/vit-and-rich/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number. *
 * DRAFT COPY: the summary, outcomes and highlights below were written from the
 * content on this page, not from the brief. Read them against what the
 * engagement actually covered and correct anything that overstates it.
 *
 * CHECK: Add industry, summary, post links, handle and the engagement period.
 */

import type { Client } from "./types";
import { draftPosts } from "./types";

const client: Client = {
  slug: "vit-and-rich",
  name: "Vit and Rich",
  handle: "@vitandrich",
  period: "Ongoing",
  summary:
    "Organic social and content strategy for Vit and Rich, covering the monthly calendar, copy and publishing.",
  services: ["Organic social", "Content strategy"],
  outcomes: [
    {
      title: "A consistent brand presence",
      body: "Posting moved from occasional to regular, which is the first requirement for an account to grow at all.",
    },
    {
      title: "Content built around the product",
      body: "Each post leads with the product and what it does, rather than generic lifestyle imagery.",
    },
    {
      title: "A repeatable format set",
      body: "A handful of proven layouts means new content starts from a known structure.",
    },
    {
      title: "Everything handled in one place",
      body: "Strategy, copy and scheduling sit with one team, so nothing waits in a queue between hands.",
    },
  ],
  highlights: [
    "Monthly content calendar planned and published",
    "Copy and scheduling handled end to end",
  ],
  posts: draftPosts(6),
  instagramUrl: "https://www.instagram.com/",
};

export default client;
