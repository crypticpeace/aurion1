/**
 * Potato Media
 *
 * Media for this client lives in /public/images/work/potato-media/, named by
 * brand so a new reel drops into the right grid:
 *   astrid-NN.jpg  cage-NN.jpg  dinus-NN.jpg  maxus-NN.jpg  pmb-NN.jpg
 * Each is a 4:5 grid preview at 1080x1350, cropped from the reel cover by
 * scripts/potato_thumbs.py. A post with thumb: null shows a numbered tile.
 *
 * CHECK: Confirm the Potato Media handle, each sub-brand's category label, and
 * that every thumbnail sits against the right shortcode: they were matched by
 * the order the covers were supplied, not read off Instagram.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "potato-media",
  name: "Potato Media",
  handle: "@potatomedia",
  industry: "Media and production",
  period: "Ongoing",
  summary:
    "Reel production across the Potato Media roster, covering hospitality, fitness, cinema, travel and dining brands, each with its own tone and posting rhythm.",
  services: ["Reel production", "Content strategy", "Organic social", "Multi-brand content"],
  outcomes: [
    {
      title: "One production line, several distinct brand voices",
      body: "Each brand on the roster keeps its own look and tone while sharing a single production and approval process, so nothing waits in a queue behind another brand.",
    },
    {
      title: "Shoots planned in batches",
      body: "Filming is grouped by brand and location rather than scheduled post by post, which keeps the calendar full without a shoot every week.",
    },
    {
      title: "Formats that repeat",
      body: "Each brand has a small set of formats that reliably perform, so the team starts from a known structure instead of a blank page.",
    },
    {
      title: "Faster turnaround on launches",
      body: "New openings, menus and offers go out while they are still news, because the production slot is already booked.",
    },
  ],
  highlights: [
    "Every brand on the roster handled in parallel, each with its own calendar",
    "Batch shooting across locations to keep production costs down",
    "Formats refined per brand from what their audience responds to",
  ],
  collections: [
    {
      // The lock-up in the covers reads ASTRID VILLAS. CHECK the spelling.
      name: "Astrid Villas",
      note: "Hospitality",
      posts: [
        { shortcode: "DUlIT8XjDL2", type: "reel", thumb: "astrid-01.jpg", caption: "Astrid Villas: escape the city, private pool villa" },
        { shortcode: "DVTDPWTjGAM", type: "reel", thumb: "astrid-02.jpg", caption: "Astrid Villas: luxury you live, poolside" },
        { shortcode: "DWdzk9CSS-O", type: "reel", thumb: "astrid-03.jpg", caption: "Astrid Villas: living room interior tour" },
      ],
    },
    {
      name: "Cage Muscle",
      note: "Fitness",
      posts: [
        { shortcode: "DU8BfbVCD-l", type: "reel", thumb: "cage-01.jpg", caption: "Cage Muscle: what the gym does differently" },
        { shortcode: "DVK2_NICHSk", type: "reel", thumb: "cage-02.jpg", caption: "Inside the Cage, episode 4: why Cage Muscle is different" },
        { shortcode: "DVOT-3eiI_p", type: "reel", thumb: "cage-03.jpg", caption: "Inside the Cage, episode 3: is it too late to start the gym" },
        { shortcode: "DVTHy8liNPD", type: "reel", thumb: "cage-04.jpg", caption: "Cage Muscle crossing 22.7M views in thirty days" },
        { shortcode: "DViGjIBiDbA", type: "reel", thumb: "cage-05.jpg", caption: "Why does my shoulder hurt: form correction at Cage Muscle" },
        { shortcode: "DVv2VvXCCN4", type: "reel", thumb: "cage-06.jpg", caption: "Inside the Cage, episode 2: building a real body" },
        { shortcode: "DV1DzfFiOeI", type: "reel", thumb: "cage-07.jpg", caption: "Spotted set on the incline press at Cage Muscle" },
        { shortcode: "DV_SI4iiK6u", type: "reel", thumb: "cage-08.jpg", caption: "Inside the Cage, episode 1: the series opener" },
        { shortcode: "DWG_d3iCIIy", type: "reel", thumb: "cage-09.jpg", caption: "This isn't just a gym, this is Cage Muscle" },
      ],
    },
    {
      name: "Maxus Cinema",
      note: "Cinema",
      posts: [
        { shortcode: "DU2onRXjZig", type: "reel", thumb: "maxus-01.jpg", caption: "Back-to-back housefull shows for Dhurandhar at Maxus Cinemas" },
        { shortcode: "DViL7QEDex2", type: "reel", thumb: "maxus-02.jpg", caption: "Dhurandhar: The Revenge, cut for Maxus Cinemas" },
        { shortcode: "DVysGpnkrN3", type: "reel", thumb: "maxus-03.jpg", caption: "Flat 99 rupee tickets, any show, any location" },
        { shortcode: "DWG2I5RjSGp", type: "reel", thumb: "maxus-04.jpg", caption: "Audience reactions in the Maxus Cinemas lobby" },
      ],
    },
    {
      name: "Pack My Bag",
      note: "Travel",
      posts: [
        { shortcode: "DU3MYN3CMWe", type: "reel", thumb: "pmb-01.jpg", caption: "Char Dham Yatra package, ex-Haridwar" },
        { shortcode: "DVGfCW1jYhG", type: "reel", thumb: "pmb-02.jpg", caption: "Thailand Songkran Festival package" },
        { shortcode: "DVI1dRwCGHh", type: "reel", thumb: "pmb-03.jpg", caption: "Bali holiday package" },
        { shortcode: "DVjAT5eiLfS", type: "reel", thumb: "pmb-04.jpg", caption: "Luxury Singapore escape package" },
      ],
    },
    {
      // Renamed from "Sea and Shore": the signage, the logo and the handle in
      // the supplied covers all read Dinu's Shore & Sea. CHECK the spelling.
      name: "Dinu's Shore & Sea",
      note: "Beachfront dining",
      posts: [
        { shortcode: "DXZWqNHirOm", type: "reel", thumb: "dinus-01.jpg", caption: "Dinu's Shore & Sea: the bamboo frontage after dark" },
        { shortcode: "DVXxZMTiDKm", type: "reel", thumb: "dinus-02.jpg", caption: "No internet at Dinu's Shore & Sea, tune into the waves instead" },
        { shortcode: "DV1E1cmiGSI", type: "reel", thumb: "dinus-03.jpg", caption: "Holi by the Shore, season two: raindance, DJ and foam" },
        { shortcode: "DWG3OV3iKBc", type: "reel", thumb: "dinus-04.jpg", caption: "Beachfront weddings at Dinu's Shore & Sea" },
      ],
    },
  ],
  instagramUrl: "https://www.instagram.com/",
};

export default client;
