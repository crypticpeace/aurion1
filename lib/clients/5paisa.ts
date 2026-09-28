/**
 * 5paisa
 *
 * Media for this client lives in /public/images/work/5paisa/
 *   logo.svg   -> logo, referenced below as logo: "logo.svg"
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "5paisa",
  name: "5paisa",
  logo: null,
  handle: "@5paisa",
  industry: "Finance",
  period: "Jan 2026 to Jun 2026",
  summary:
    "Performance creative for the Pay Later (MTF) product, built as a series of short-form films that explain a complex trading feature in everyday language.",
  services: ["Performance creative", "Reel production", "Ad operations"],
  metrics: [
    { label: "Followers", value: "412K", delta: "+38K", note: "over six months" },
    { label: "Avg. likes per post", value: "3.1K", delta: "+62%" },
    { label: "Engagement rate", value: "4.8%", delta: "+1.9 pts" },
    { label: "Reel views", value: "12.4M", note: "across the campaign" },
  ],
  highlights: [
    "Product explainers scripted in Hinglish for a first-time investor audience",
    "Creative refreshed every two weeks based on hook retention data",
    "Best performing reel drove the lowest cost per lead of the quarter",
  ],
  posts: [
    { shortcode: "REPLACE_1", type: "reel", thumb: null, caption: "Pay Later (MTF) explained in 30 seconds", stats: { views: "1.2M", likes: "4.3K" } },
    { shortcode: "REPLACE_2", type: "reel", thumb: null, caption: "Margin trading myths, busted", stats: { views: "860K", likes: "2.9K" } },
    { shortcode: "REPLACE_3", type: "carousel", thumb: null, caption: "How much can you actually borrow?", stats: { likes: "2.1K", comments: "148" } },
    { shortcode: "REPLACE_4", type: "post", thumb: null, caption: "Market open checklist", stats: { likes: "1.8K" } },
    { shortcode: "REPLACE_5", type: "reel", thumb: null, caption: "First trade, step by step", stats: { views: "640K" } },
    { shortcode: "REPLACE_6", type: "carousel", thumb: null, caption: "Five terms every new investor should know", stats: { likes: "2.4K" } },
  ],
  instagramUrl: "https://www.instagram.com/5paisa/",
};

export default client;
