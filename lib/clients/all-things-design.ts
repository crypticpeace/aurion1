/**
 * All Things Design
 *
 * Media for this client lives in /public/images/work/all-things-design/
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
  slug: "all-things-design",
  name: "All Things Design",
  handle: "@allthingsdesign",
  industry: "Design",
  period: "Ongoing",
  summary:
    "Social content for a design studio, turning finished projects and work in progress into reels that show craft rather than describe it.",
  services: ["Organic social", "Reel production", "Content strategy"],
  outcomes: [
    {
      title: "Work shown rather than explained",
      body: "Projects are cut as process and reveal, which suits a design audience far better than a caption describing the same thing.",
    },
    {
      title: "A consistent visual language",
      body: "Pacing, typography and framing are kept the same across reels, so the feed looks designed rather than assembled.",
    },
    {
      title: "A steady stream from existing projects",
      body: "Content is pulled from work the studio is doing anyway, so the calendar does not depend on separate shoot days.",
    },
    {
      title: "Enquiries that arrive informed",
      body: "People reaching out have already seen the standard of work and the kind of projects the studio takes on.",
    },
  ],
  highlights: [
    "Process-and-reveal edits built from live project footage",
    "Consistent pacing and typography across every reel",
    "Content sourced from ongoing work rather than separate shoots",
  ],
  posts: [
    { shortcode: "DcOEJ07t-2i", type: "reel", thumb: "01.jpg", caption: "A reading corner against a marble feature wall" },
    { shortcode: "DbX9QMXuPep", type: "reel", thumb: "02.jpg", caption: "Brick, planting and colour in an office breakout" },
    { shortcode: "DbLWfR9tI03", type: "reel", thumb: "03.jpg", caption: "A corner cabin with a city view" },
    { shortcode: "DautwVjtWqO", type: "reel", thumb: "04.jpg", caption: "The IRIS meeting room behind frosted glass" },
    { shortcode: "DXEOFMIDS_n", type: "reel", thumb: "05.jpg", caption: "A living room render before the build" },
    { shortcode: "DWYHIf6jGXU", type: "reel", thumb: "06.jpg", caption: "The elleys' boardroom" },
  ],
  instagramUrl: "https://www.instagram.com/allthingsdesign/",
  website: {
    url: "https://www.allthingsdesign.in/",
    label: "allthingsdesign.in",
    blurb:
      "The studio's own site: a project gallery that lets the work carry the page, with enquiry routes on every screen and a layout that holds up on a phone, where most of the traffic arrives.",
    desktop: "site-desktop.jpg",
    desktopAlt: "site-gallery.jpg",
    mobile: "site-mobile.jpg",
  },
};

export default client;
