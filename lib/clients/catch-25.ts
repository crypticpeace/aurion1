/**
 * Catch 25
 *
 * Media for this client lives in /public/images/work/catch-25/
 *   logo.svg   -> logo, referenced below as logo: "logo.svg"
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "catch-25",
  name: "Catch 25",
  logo: "logo.jpeg",
  handle: "@catch25",
  industry: "Education",
  period: "Apr 2026 to Aug 2026",
  summary:
    "Admissions marketing for a science academy, from parent-student orientation coverage to results announcements and faculty features.",
  services: ["Education marketing", "Lead generation", "Organic social"],
  metrics: [
    { label: "Followers", value: "48K", delta: "+19K", note: "admissions season" },
    { label: "Avg. likes per post", value: "980", delta: "+51%" },
    { label: "Engagement rate", value: "7.4%", delta: "+3.1 pts" },
    { label: "Enquiries from social", value: "1,240", note: "season total" },
  ],
  highlights: [
    "Orientation event covered live and cut into a week of content",
    "Parent-facing posts written for trust, student-facing for aspiration",
    "Enquiry forms tracked end to end from post to admission call",
  ],
  posts: [
    { shortcode: "DcDfuIyoLbN", type: "reel", thumb: "01.png", caption: "Orientation day, in full", stats: { views: "320K" } },
    { shortcode: "Dc0n2PLiFwY", type: "carousel", thumb: "02.png", caption: "What parents asked us most", stats: { likes: "1.3K" } },
    { shortcode: "DdTEjN_o3l7", type: "post", thumb: "03.png", caption: "Results day", stats: { likes: "2.6K" } },
    { shortcode: "DQJcqjQEVsA", type: "reel", thumb: "04.png", caption: "A day in the classroom", stats: { views: "190K" } },
    { shortcode: "DdBhRQ7ounK", type: "post", thumb: "05.png", caption: "Meet the faculty", stats: { likes: "870" } },
    { shortcode: "DauWHVWCMz0", type: "carousel", thumb: "06.png", caption: "Batch timings and fee structure", stats: { likes: "640" } },
  ],
  instagramUrl: "https://www.instagram.com/catch25science/",
};

export default client;
