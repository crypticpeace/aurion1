/**
 * Rikaayin
 *
 * Media for this client lives in /public/images/work/rikaayin/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number. *
 * DRAFT COPY: the summary, outcomes and highlights below were written from the
 * content on this page, not from the brief. Read them against what the
 * engagement actually covered and correct anything that overstates it.
 *
 * CHECK: Shortcodes carried over from the previous version: confirm each one opens the right post.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "rikaayin",
  name: "Rikaayin",
  handle: "@rikaayin",
  industry: "Interior design",
  period: "Ongoing",
  summary:
    "Social content for an interior design studio: completed residential and retail projects shown as photography first, with enough detail in the frame to carry the standard of the work.",
  services: ["Organic social", "Reel production", "Content strategy"],
  outcomes: [
    {
      title: "A feed with a consistent identity",
      body: "Shared colour, type and framing across posts, so the grid reads as one brand.",
    },
    {
      title: "Content planned a month ahead",
      body: "A standing calendar replaced last-minute posting, which steadied both output and quality.",
    },
    {
      title: "Formats that repeat",
      body: "A small set of layouts the audience recognises, rather than a different idea every week.",
    },
    {
      title: "Projects shown as photography, not as captions",
      body: "Each project leads on the image, because a design audience judges the work before it reads a word about it.",
    },
  ],
  highlights: [
    "Completed residential and retail projects carried as the main format",
    "Photography treated as the content rather than as decoration for a caption",
    "A consistent crop and grade so the grid holds together",
  ],
  posts: [
    { shortcode: "DcdbXIdIDz0", type: "reel", thumb: "01.jpg", caption: "Rikaayin reel" },
    { shortcode: "DcTIJiHDl-R", type: "carousel", thumb: "02.jpg", caption: "Rikaayin carousel" },
    { shortcode: "Db8BXDzOjYr", type: "post", thumb: "03.jpg", caption: "Rikaayin post" },
    { shortcode: "DcBGkrtDlL7", type: "carousel", thumb: "04.jpg", caption: "Rikaayin carousel" },
    { shortcode: "Db5X9bZOYPf", type: "reel", thumb: "05.jpg", caption: "Rikaayin reel" },
    { shortcode: "DbvH5rcuNaj", type: "post", thumb: "06.jpg", caption: "Rikaayin post" },
  ],
  instagramUrl: "https://www.instagram.com/",
};

export default client;
