/**
 * Maxus Cakes
 *
 * Media for this client lives in /public/images/work/maxus-cakes/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 *
 * The links were supplied newest-first and the covers oldest-first, so
 * scripts/reel_thumbs.py lists them flipped. CHECK that each tile opens the
 * reel it shows.
 *
 * CHECK: Add post links, handle and the engagement period.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "maxus-cakes",
  name: "Maxus Cakes",
  handle: "@maxuscakes",
  industry: "Bakery",
  period: "Ongoing",
  summary:
    "Social content for a cake brand, built around the product itself: close, well-lit food footage that makes an order feel like a decision already made.",
  services: ["Organic social", "Reel production", "Content strategy"],
  outcomes: [
    {
      title: "Product shot to sell",
      body: "Close, well-lit footage of the actual product does more for a bakery than any amount of copy about freshness.",
    },
    {
      title: "Occasions planned ahead",
      body: "Festivals, birthdays and seasonal moments are scheduled in advance, so the brand is posting before the orders are placed rather than after.",
    },
    {
      title: "A consistent look across the feed",
      body: "Shared lighting, framing and colour mean the grid reads as one brand at a glance.",
    },
    {
      title: "Orders through DMs and WhatsApp",
      body: "Every post routes to a clear way to order, so interest turns into an enquiry in the same session.",
    },
  ],
  highlights: [
    "Product-first filming with consistent lighting and framing",
    "Calendar planned around festivals and ordering occasions",
    "Every post routed to a direct way to order",
  ],
  posts: [
    { shortcode: "C_dAOPlNCO4", type: "reel", thumb: "01.jpg", caption: "A trending-audio reel for Maxus Cakes" },
    { shortcode: "C946fssSLc1", type: "reel", thumb: "02.jpg", caption: "Types of customers at a cake shop, part one" },
    { shortcode: "C7gxlyYSxZP", type: "reel", thumb: "03.jpg", caption: "Walking in for the flat 50% off" },
    { shortcode: "C7EdH49t9Ks", type: "reel", thumb: "04.jpg", caption: "One day to go: a countdown cake" },
    { shortcode: "C50xSAPNkdx", type: "reel", thumb: "05.jpg", caption: "A pink heart cake on the stand" },
  ],
  instagramUrl: "https://www.instagram.com/",
};

export default client;
