/**
 * Scholar Medico Services
 *
 * Media for this client lives in /public/images/work/scholar-medico-services/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number. *
 * The grid was rebuilt from a fresh list of twelve. Links came oldest-first
 * and covers newest-first, so scripts/reel_thumbs.py lists them flipped.
 *
 * `type` is read off the cover's shape: 9:16 covers are reels and get the play
 * badge, 4:5 ones are static posters. It only drives the badge, never the
 * link, so a wrong guess costs an icon rather than a dead link.
 *
 * CHECK: Confirm the handle and the public-facing brand name (listed as SMS in the portfolio doc).
 */

import type { Client } from "./types";

const client: Client = {
  slug: "scholar-medico-services",
  name: "Scholar Medico Services",
  handle: "@scholarmedico",
  industry: "Medical education",
  period: "Ongoing",
  summary:
    "Content for a medical admissions consultancy, written to answer the questions students and parents ask before they commit to a counselling service.",
  services: ["Organic social", "Reel production", "Content strategy", "Lead generation"],
  outcomes: [
    {
      title: "Common questions answered in public",
      body: "The reels work through the admissions questions families ask most, which shortens the first call and filters out mismatched enquiries.",
    },
    {
      title: "Credibility built before contact",
      body: "Explaining the process clearly and accurately does more for trust in a regulated category than any claim about outcomes.",
    },
    {
      title: "A reference library, not a feed that disappears",
      body: "Each reel stays useful long after posting, because the questions it answers come round with every admissions cycle.",
    },
    {
      title: "Enquiries that are better qualified",
      body: "People who reach out already understand the service, so conversations start further along.",
    },
  ],
  highlights: [
    "Every claim checked against official admissions sources",
    "One admissions question answered per reel",
    "Content planned around the annual admissions cycle",
  ],
  posts: [
    { shortcode: "Dbfv3D-gPiz", type: "post", thumb: "01.jpg", caption: "300 marks in NEET: the courses still open to you" },
    { shortcode: "DbiQzghgxIO", type: "reel", thumb: "02.jpg", caption: "NEET mai 400 marks" },
    { shortcode: "Dbk4EL_AUPD", type: "reel", thumb: "03.jpg", caption: "Doctor banne ka sapna" },
    { shortcode: "DbnvbV-TWKv", type: "post", thumb: "04.jpg", caption: "Counselling does not have to be confusing" },
    { shortcode: "DbqCD5YAi2H", type: "reel", thumb: "05.jpg", caption: "SMS student experience" },
    { shortcode: "DbsjmzyAmFI", type: "reel", thumb: "06.jpg", caption: "The lowest marks that still got a seat in re-NEET" },
    { shortcode: "DbvHkYNgz1k", type: "post", thumb: "07.jpg", caption: "Why trust Scholar Medico Services" },
    { shortcode: "DbyDX-yg3vr", type: "post", thumb: "08.jpg", caption: "Green flags of a good medical college" },
    { shortcode: "Db0o5HCgrns", type: "reel", thumb: "09.jpg", caption: "NEET mai 400?" },
    { shortcode: "Db2qSUiMK_q", type: "reel", thumb: "10.jpg", caption: "An office tour at Scholar Medico Services" },
    { shortcode: "Db5Xlw3AdFj", type: "post", thumb: "11.jpg", caption: "Why NMC recognition matters when choosing a college" },
    { shortcode: "Db8HVZUgI3o", type: "reel", thumb: "12.jpg", caption: "Scoring 500 and above in NEET" },
  ],
  instagramUrl: "https://www.instagram.com/scholarmedico/",
};

export default client;
