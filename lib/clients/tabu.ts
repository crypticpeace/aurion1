/**
 * TABU
 *
 * Media for this client lives in /public/images/work/tabu/
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
 * CHECK: TABU: confirm the full brand name, industry, handle and summary. Reels are live.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "tabu",
  name: "TABU",
  handle: "@tabu",
  // CHECK: read off the reels, which are all bridal work.
  industry: "Bridal makeup and beauty",
  period: "Ongoing",
  summary:
    "Social content for a bridal makeup artist, built around finished looks and the work behind them, so the feed shows craft rather than claims about it.",
  services: ["Organic social", "Reel production"],
  outcomes: [
    {
      title: "A clear look across the feed",
      body: "Shared framing and pacing across reels make the account read as one brand rather than a set of one-off posts.",
    },
    {
      title: "Content built for reach",
      body: "Each reel opens on its strongest moment, which is what decides whether it reaches people beyond the current audience.",
    },
    {
      title: "A repeatable production process",
      body: "Shoots, edits and approvals follow the same route every time, so turnaround stays predictable.",
    },
    {
      title: "Work shown at the standard it was done",
      body: "Looks are shot and graded carefully enough to stand next to the photographers' own images from the same wedding.",
    },
  ],
  highlights: [
    "Finished bridal looks carried as the main format",
    "Behind-the-chair moments cut in to show the work, not just the result",
    "A consistent grade and pacing so the feed reads as one body of work",
  ],
  posts: [
    { shortcode: "DaLBtltNeMP", type: "reel", thumb: "01.jpg", caption: "The artist versus the art: a bridal look" },
    { shortcode: "DZ9-dSPCXeP", type: "reel", thumb: "02.jpg", caption: "A makeup artist's answer to AI replacing jobs" },
    { shortcode: "DZug8aYtOJK", type: "reel", thumb: "03.jpg", caption: "Behind the veil: a red bridal look" },
    { shortcode: "DbLItUyztfZ", type: "reel", thumb: "04.jpg", caption: "A sage green bridal look, shot outdoors" },
    { shortcode: "DbA8eIJjVB_", type: "carousel", thumb: "05.jpg", caption: "Bride Khyati on her wedding day" },
    { shortcode: "DZ4WtMWRY3d", type: "post", thumb: "06.jpg", caption: "A bride under the red veil" },
    { shortcode: "DaAotGgt_Go", type: "post", thumb: "07.jpg", caption: "Every bride deserves a moment" },
    { shortcode: "DbS0Ae4NlK3", type: "post", thumb: "08.jpg", caption: "Bride in style: the full look and the details" },
    { shortcode: "DZ7WmF7tnrL", type: "post", thumb: "09.jpg", caption: "The products behind a bridal look, broken down" },
  ],
  instagramUrl: "https://www.instagram.com/",
};

export default client;
