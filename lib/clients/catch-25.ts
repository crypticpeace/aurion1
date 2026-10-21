/**
 * Catch25 Science Academy
 *
 * Media for this client lives in /public/images/work/catch-25/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 *
 * The grid was rebuilt from a fresh list of eight posts. The covers were
 * supplied in reverse order against the links, so reel_thumbs.py lists them
 * already flipped; 01.jpg is the newest post and 08.jpg the Freshers poster.
 *
 * CHECK: the supplied list had DcDfuIyoLbN twice, once as /p/ and once as
 * /reel/. It is one post, kept here as a reel.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "catch-25",
  name: "Catch25 Science Academy",
  handle: "@catch25science",
  industry: "Education",
  period: "Apr 2026 to Aug 2026",
  summary:
    "Admissions marketing for a science academy, covering parent-student orientation, results announcements and faculty features across the admissions season.",
  services: ["Education marketing", "Reel production", "Organic social", "Lead generation"],
  outcomes: [
    {
      title: "Parents recognised the brand before the call",
      body: "Consistent posting through the admissions window meant most enquiry calls started with the parent already knowing who the academy was and what it taught.",
    },
    {
      title: "Results and orientation became content, not announcements",
      body: "Each event was filmed and cut into a run of posts, so one day of shooting carried the feed for a week.",
    },
    {
      title: "A clearer split between parent and student messaging",
      body: "Parent-facing posts lead on trust, faculty and process; student-facing posts lead on aspiration, in the language students actually use.",
    },
    {
      title: "Enquiries traceable back to the post",
      body: "Forms and WhatsApp links were tagged per campaign, so the academy can see which content brings admission calls rather than guessing.",
    },
  ],
  highlights: [
    "Orientation covered live on the day and edited into a week of content",
    "Separate messaging tracks for parents and students",
    "Enquiry forms tracked from first post through to the admission call",
  ],
  posts: [
    { shortcode: "DedywW4oTEk", type: "reel", thumb: "01.jpg", caption: "A Catch25 student on scoring 99.05 percentile in JEE Mains" },
    { shortcode: "DebxzP-Is2U", type: "reel", thumb: "02.jpg", caption: "Catch25 students at the NSS tricolour march" },
    { shortcode: "Ddi8zIhuzvD", type: "reel", thumb: "03.jpg", caption: "A Catch25 student on scoring 98.26 percentile in MHT CET" },
    { shortcode: "DNxa6k00JVH", type: "post", thumb: "04.jpg", caption: "Be the penguin: choose quality education" },
    { shortcode: "DcDfuIyoLbN", type: "reel", thumb: "05.jpg", caption: "Maharashtra SSC result 2026 at Catch25 Science Academy" },
    { shortcode: "DPvAnwwEUDg", type: "post", thumb: "06.jpg", caption: "Student achiever Reva Dusa, 99.18 percentile in MHT CET" },
    { shortcode: "DUM5O_-kY0Q", type: "post", thumb: "07.jpg", caption: "A Catch25 student heading to ICT Mumbai" },
    { shortcode: "DYEWgOwojlR", type: "reel", thumb: "08.jpg", caption: "Freshers 2026: Back to the 80s" },
  ],
  instagramUrl: "https://www.instagram.com/catch25science/",
};

export default client;
