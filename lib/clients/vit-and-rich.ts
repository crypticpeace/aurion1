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
 * Covers were supplied in reverse against the links, so scripts/reel_thumbs.py
 * lists them flipped. The square pack shot is padded out to 4:5, not cropped.
 *
 * CHECK: instagramUrl is still a placeholder, and the handle was inferred from
 * the brand name rather than confirmed.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "vit-and-rich",
  // CHECK: the packaging and vitnrich.com both read "Vit n Rich".
  name: "Vit n Rich",
  handle: "@vitnrich",
  industry: "Confectionery",
  period: "Ongoing",
  summary:
    "Social content for a no-added-sugar chocolate brand, built around the packs themselves: product films, the range laid out, and campaign work carried through to an outdoor placement.",
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
  posts: [
    { shortcode: "DAWJUp2Ipiv", type: "post", thumb: "01.jpg", caption: "Whole Almond Nutties: no added sugar, gluten free" },
    { shortcode: "DAqyhuTokIB", type: "reel", thumb: "02.jpg", caption: "The full Vit n Rich range, and a screenshot giveaway" },
    { shortcode: "DBB7cVtI7ps", type: "reel", thumb: "03.jpg", caption: "The 70% dark chocolate almond bar" },
    { shortcode: "DBMMYpzoo40", type: "reel", thumb: "04.jpg", caption: "An animated spot for the brand" },
    { shortcode: "DBodSYuSez5", type: "reel", thumb: "05.jpg", caption: "Nutties on a city billboard" },
    { shortcode: "DCMeBHySYku", type: "reel", thumb: "06.jpg", caption: "The range laid out: bars, Nutties and the heart box" },
  ],
  instagramUrl: "https://www.instagram.com/",
};

export default client;
