/**
 * A&H Capital
 *
 * Media for this client lives in /public/images/work/ah-capital/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 *
 * CHECK: Confirm the spelling: the portfolio doc says A&H Capital, the homepage testimonial says ABH Capital.
 * Covers were supplied in reverse against the links, so scripts/reel_thumbs.py
 * lists them flipped. Square posters are padded out to 4:5 rather than cropped,
 * because their type runs close to the edges.
 *
 * CHECK two pairings that look off against the posts' own dates: the Aug 15
 * post carries the Rudra Abhishek Puja cover while the Independence Day
 * creative sits on an Aug 11 post, which looks swapped, and the Diwali
 * celebration reel sits on a post from late September.
 *
 * CHECK: handle, instagramUrl and the engagement period are still placeholders.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "ah-capital",
  name: "A&H Capital",
  handle: "@ahcapital",
  industry: "Finance",
  period: "Ongoing",
  summary:
    "Brand messaging and social content for a capital advisory firm, written for an audience that judges a financial brand on clarity and restraint.",
  services: ["Branding", "Content strategy", "Organic social", "Lead generation"],
  outcomes: [
    {
      title: "Sharper brand messaging",
      body: "The core positioning was rewritten so the firm describes what it does in plain terms, which matters more in finance than it does anywhere else.",
    },
    {
      title: "Content that matches the category",
      body: "Restrained, accurate posts suited to a professional audience, with no claim that cannot be supported.",
    },
    {
      title: "Higher-quality enquiries",
      body: "Clearer messaging filters who gets in touch, so the firm spends less time on conversations that were never a fit.",
    },
    {
      title: "A consistent presence",
      body: "Regular posting keeps the firm visible to the people who research for months before making contact.",
    },
  ],
  highlights: [
    "Brand messaging rewritten for clarity over jargon",
    "Every claim checked before publication, as the category demands",
    "Posting rhythm matched to a long research-and-decide cycle",
  ],
  posts: [
    { shortcode: "DAN9a2gsaZo", type: "reel", thumb: "01.jpg", caption: "Diwali celebration at A&H Capital" },
    { shortcode: "C-jopb2IuOQ", type: "reel", thumb: "02.jpg", caption: "The health checkup camp organised by A&H Capital" },
    { shortcode: "C-rYOz8IAg_", type: "reel", thumb: "03.jpg", caption: "Rudra Abhishek Puja at A&H Capital" },
    { shortcode: "C-hTBsbgdqq", type: "reel", thumb: "04.jpg", caption: "Celebrating the 78th Independence Day" },
    { shortcode: "C-ZYz2LIqrl", type: "reel", thumb: "05.jpg", caption: "What a business loan actually covers" },
    { shortcode: "C-Xl2dTSPor", type: "post", thumb: "06.jpg", caption: "Quit India Movement Day" },
    { shortcode: "C9Z2hKCvnwt", type: "post", thumb: "07.jpg", caption: "Five mistakes to avoid when taking a business loan" },
    { shortcode: "DBxjTC1ATrA", type: "post", thumb: "08.jpg", caption: "Trade finance: bill discounting, sales and purchase bills, vendor finance" },
    { shortcode: "DB21cZbIg3x", type: "reel", thumb: "09.jpg", caption: "Happy Diwali from A&H Capital" },
    { shortcode: "DCLrb_5gJo2", type: "reel", thumb: "10.jpg", caption: "Happy New Year from A&H Capital" },
  ],
  instagramUrl: "https://www.instagram.com/",
};

export default client;
