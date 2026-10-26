/**
 * Nyraj Vasani
 *
 * Media for this client lives in /public/images/work/nyraj-vasani/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 *
 * Thumbnails are cropped from the reel covers by scripts/reel_thumbs.py. They
 * were matched to shortcodes by the order the covers were supplied, not read
 * off Instagram, so CHECK that each tile opens the reel it shows.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "nyraj-vasani",
  name: "Nyraj Vasani",
  handle: "@nyrajvasani",
  industry: "Personal brand",
  period: "Ongoing",
  summary:
    "Personal brand content built around a steady run of reels, shaped to carry one idea per video and to sound like the person on camera rather than a script.",
  services: ["Personal branding", "Reel production", "Content strategy", "Organic social"],
  outcomes: [
    {
      title: "A recognisable on-camera format",
      body: "The reels follow a consistent structure and framing, so the feed reads as one body of work instead of scattered uploads.",
    },
    {
      title: "Reach beyond the existing audience",
      body: "Reels are built to open on the point rather than an introduction, which is what carries a video to people who have not seen the account before.",
    },
    {
      title: "A posting rhythm that holds",
      body: "Filming in batches keeps the calendar supplied, so the account stays active through busy weeks.",
    },
    {
      title: "Ideas banked ahead of filming",
      body: "Topics are planned in advance from questions the audience actually asks, so shoot days start with a script rather than a search for one.",
    },
  ],
  highlights: [
    "One idea per reel, opening on the point rather than an introduction",
    "Batch filming to keep a steady publishing rhythm",
    "Topics drawn from questions the audience already asks",
  ],
  posts: [
    { shortcode: "DU0ZixEDPRd", type: "post", thumb: "01.jpg", caption: "Poison Cup: the call at the crease" },
    { shortcode: "Dd_YNnzIxt9", type: "reel", thumb: "02.jpg", caption: "Poison Cup: a tough pitch and a tough match" },
    { shortcode: "DVx95s2jHVo", type: "reel", thumb: "03.jpg", caption: "Poison Cup 2026: the winners lift the trophy" },
    { shortcode: "DafXkx0NS0O", type: "reel", thumb: "04.jpg", caption: "The Poison Cup 2026 champions trophy" },
    { shortcode: "DZxfTQMNN3i", type: "reel", thumb: "05.jpg", caption: "Trophies and medals set out before the Poison Cup final" },
    { shortcode: "DZFdcMjNRNb", type: "reel", thumb: "06.jpg", caption: "How to make money out of the Mumbai monsoon" },
    { shortcode: "DYKSXxWt8Hx", type: "reel", thumb: "07.jpg", caption: "Guess the childhood photo: Nyraj against Nishma" },
    { shortcode: "DYKDxQqNlKD", type: "reel", thumb: "08.jpg", caption: "What the host cities get out of FIFA 2026" },
    { shortcode: "DX9HfiEMNn2", type: "reel", thumb: "09.jpg", caption: "Pepsi, Coca-Cola or Sprite: a blind taste test" },
    { shortcode: "DXizyXnDGY7", type: "reel", thumb: "10.jpg", caption: "On the TEDx stage" },
    { shortcode: "DXEH4t5jAFp", type: "reel", thumb: "11.jpg", caption: "Reading The Loneliness of Sonia and Sunny by Kiran Desai" },
  ],
  instagramUrl: "https://www.instagram.com/nyrajvasani/",
};

export default client;
