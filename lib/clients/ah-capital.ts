/**
 * A&H Capital
 *
 * Media for this client lives in /public/images/work/ah-capital/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 *
 * CHECK: Confirm the spelling: the portfolio doc says A&H Capital, the homepage testimonial says ABH Capital.
 * CHECK: Add post links, handle and the engagement period.
 */

import type { Client } from "./types";
import { draftPosts } from "./types";

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
  posts: draftPosts(6),
  instagramUrl: "https://www.instagram.com/",
};

export default client;
