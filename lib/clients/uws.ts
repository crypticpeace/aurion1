/**
 * UWS
 *
 * Media for this client lives in /public/images/work/uws/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number. *
 * DRAFT COPY: the summary, outcomes and highlights below were written from the
 * content on this page, not from the brief. Read them against what the
 * engagement actually covered and correct anything that overstates it. *
 * Thumbnails are cropped from the reel covers by scripts/reel_thumbs.py. They
 * were matched to shortcodes by the order the covers were supplied, not read
 * off Instagram, so CHECK that each tile opens the reel it shows.
 *
 * CHECK: UWS: confirm the full brand name, industry, handle and summary. Reels are live.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "uws",
  name: "UWS",
  handle: "@uws",
  // CHECK: the lock-up in the covers reads United World Summit.
  industry: "Summits and conferences",
  period: "Ongoing",
  summary:
    "Social content for an international summit: speaker moments, partnership announcements and the arrival of delegates, cut so the programme reads as an event worth attending rather than a notice board.",
  services: ["Organic social", "Reel production"],
  outcomes: [
    {
      title: "A consistent posting rhythm",
      body: "Reels go out on a steady schedule rather than in bursts, which is what keeps an account visible between campaigns.",
    },
    {
      title: "Formats the audience recognises",
      body: "A small set of repeating formats means each new post lands with viewers who already know what to expect.",
    },
    {
      title: "Production handled end to end",
      body: "Scripting, filming, editing and scheduling sit with one team, so nothing stalls between stages.",
    },
    {
      title: "Content that matches the room",
      body: "Footage of the floor, the stage and the arrivals rather than stock business imagery, so the posts look like the event they are promoting.",
    },
  ],
  highlights: [
    "Stage, floor and arrivals all covered rather than the keynote alone",
    "Speaker moments cut short enough to work as standalone posts",
    "A title treatment held across the set so the summit reads as one brand",
  ],
  posts: [
    { shortcode: "DZCw6S2snCy", type: "reel", thumb: "01.jpg", caption: "Delegates arriving at the summit" },
    { shortcode: "DY4UUaHMFBn", type: "reel", thumb: "02.jpg", caption: "Partnerships made at the summit" },
    { shortcode: "DXbkSAyDOLY", type: "reel", thumb: "03.jpg", caption: "Innovation is turning potential into power" },
    { shortcode: "DXMIPagDPKx", type: "reel", thumb: "04.jpg", caption: "United World Summit" },
    { shortcode: "DXEaFuRjJc8", type: "reel", thumb: "05.jpg", caption: "Walking into the summit halls" },
    { shortcode: "DWyZ0ETjHPZ", type: "reel", thumb: "06.jpg", caption: "The main stage address" },
  ],
  instagramUrl: "https://www.instagram.com/",
};

export default client;
