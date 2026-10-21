/**
 * Live events.
 *
 * Each event page is a photo gallery plus a short account of the event and
 * what Aurion did on the ground. Photos live in /public/images/events/<slug>/
 * and are listed below by file name. Until the real photographs are added, the
 * gallery shows numbered placeholder tiles in the same layout.
 *
 * The write-ups below are DRAFTS describing the kind of on-ground coverage we
 * run. Check the specifics for each event, and replace anything that does not
 * match what actually happened, before publishing.
 */

import type { Post } from "@/lib/clients";

export type Photo = {
  /** File name inside /public/images/events/<slug>/, or a full path starting with "/" */
  file: string | null;
  /** Describes the photo for search and screen readers. */
  alt: string;
  /**
   * Intrinsic pixel size, so the masonry gallery can reserve the right height
   * before the file loads. Read it off the file; the gallery shows every photo
   * at its own proportions and never crops.
   */
  width?: number;
  height?: number;
  /**
   * A self-hosted clip in the same folder, e.g. "clip-01.mp4". When set, `file`
   * is its poster frame, the tile shows a play badge, and the lightbox plays
   * the file rather than opening a still.
   */
  video?: string;
};

/**
 * A titled set of Instagram reels, used where an event's gallery is video
 * rather than stills. Thumbnails live in /public/images/events/<slug>/ and are
 * named on each reel, because Instagram blocks hotlinking of its own CDN.
 */
export type ReelGroup = {
  name: string;
  note?: string;
  reels: Post[];
  /** Optional stills shown under this group's reels, in the same 4-up grid. */
  photos?: Photo[];
};

export type LiveEvent = {
  slug: string;
  name: string;
  /** Shown under the name on the index and at the top of the event page. */
  kind: string;
  location: string;
  period: string;
  /** One line for the index card. */
  excerpt: string;
  /** Two or three paragraphs about the event. */
  about: string[];
  /** What Aurion did on the ground. */
  whatWeDid: { title: string; body: string }[];
  services: string[];
  photos: Photo[];
  /** When set, the page shows these reel grids instead of the photo gallery. */
  reelGroups?: ReelGroup[];
  /**
   * Image for this event's card on /events. These are brand panels built at
   * 4:3 from each event's logo, set on that brand's own background colour, so
   * the card fills edge to edge rather than boxing a square logo inside a
   * frame. Rebuild them with scratchpad/event_covers.py; see MEDIA.md.
   */
  cover?: { file: string; alt: string };
  /** Optional link out to the event or the brand. */
  link?: { label: string; href: string };
};

/**
 * Placeholder tiles in a repeating mix of portrait, landscape and square, so an
 * event without photographs yet still previews as a real gallery.
 */
const PLACEHOLDER_RATIOS: [number, number][] = [
  [900, 1200], [1200, 900], [1000, 1000], [900, 1600],
  [1600, 1067], [1080, 1350], [1400, 900], [1000, 1250],
];

const draftPhotos = (label: string, count = 12): Photo[] =>
  Array.from({ length: count }, (_, i) => {
    const [width, height] = PLACEHOLDER_RATIOS[i % PLACEHOLDER_RATIOS.length];
    return { file: null, alt: `${label} photo ${i + 1}`, width, height };
  });

export const events: LiveEvent[] = [
  {
    slug: "art-mumbai",
    name: "Art Mumbai",
    kind: "Art fair",
    location: "Mahalaxmi Racecourse, Mumbai",
    period: "2024 and 2026 editions",
    excerpt:
      "Two editions covered: on-ground films from the fair floor, and the countdown campaign that ran in the weeks before the next one opened.",
    about: [
      "Art Mumbai brings galleries, collectors and a wider public audience into the same space for a few days, which makes it an unusual content brief. The audience is culture-first and quick to notice when coverage is superficial, so the work had to look like it belonged at an art fair rather than at a trade show.",
      "The 2024 edition was covered live: a crew on the floor each day, an edit station running alongside, and a plan for what to shoot before the doors opened. For the 2026 edition the job started earlier, with a countdown campaign carrying the date announcement, the ticket drop and the city itself in the weeks before the fair opened.",
    ],
    whatWeDid: [
      {
        title: "Covered the fair live, each day",
        body: "A crew on the floor through the run, shooting walkthroughs, installations, performances and the crowd, with a shot list agreed before each day started.",
      },
      {
        title: "Same-day edits",
        body: "Footage was cut and published while the fair was still open, so people deciding whether to visit saw it in time to act.",
      },
      {
        title: "Ran the countdown campaign",
        body: "Date announcement, ticket drop and the run-up to the gates opening, built as a sequence rather than scattered posts.",
      },
      {
        title: "A format the next edition can reuse",
        body: "The shot list, the edit cycle and the publishing rhythm were documented, so each edition starts from a working template rather than from scratch.",
      },
    ],
    services: ["Event coverage", "Reel production", "Campaign content", "Organic social"],
    cover: { file: "cover.jpg", alt: "Art Mumbai" },
    photos: [],
    reelGroups: [
      {
        name: "2026 edition",
        note: "Countdown and ticket campaign",
        reels: [
          { shortcode: "Dd78tnABKy9", type: "reel", thumb: "2026-01.jpg", caption: "Art Mumbai 2026 campaign reel" },
          { shortcode: "DcLnhQ_yP4Y", type: "reel", thumb: "2026-02.jpg", caption: "Art Mumbai 2026 campaign reel" },
          { shortcode: "Dc004Zaiuux", type: "reel", thumb: "2026-03.jpg", caption: "Art Mumbai 2026 campaign reel" },
          { shortcode: "DdjKgUvBSgx", type: "reel", thumb: "2026-04.jpg", caption: "Art Mumbai 2026 campaign reel" },
          { shortcode: "DdoUKkOtTC9", type: "reel", thumb: "2026-05.jpg", caption: "Art Mumbai 2026 campaign reel" },
          { shortcode: "Dao6YxhthXt", type: "reel", thumb: "2026-06.jpg", caption: "Art Mumbai 2026 campaign reel" },
          { shortcode: "DeZPMqRBJsR", type: "reel", thumb: "2026-07.jpg", caption: "Art Mumbai 2026 campaign reel" },
        ],
      },
      {
        name: "2024 edition",
        note: "On-ground coverage",
        reels: [
          { shortcode: "DCWejYQy6DF", type: "reel", thumb: "2024-01.jpg", caption: "Art Mumbai 2024 coverage reel" },
          { shortcode: "DCXECqayJPI", type: "reel", thumb: "2024-02.jpg", caption: "Art Mumbai 2024 coverage reel" },
          { shortcode: "DCZX6aGq9sA", type: "reel", thumb: "2024-03.jpg", caption: "Art Mumbai 2024 coverage reel" },
          { shortcode: "DCbOE8JSGrj", type: "reel", thumb: "2024-04.jpg", caption: "Art Mumbai 2024 coverage reel" },
          { shortcode: "DCd0EfRylZN", type: "reel", thumb: "2024-05.jpg", caption: "Art Mumbai 2024 coverage reel" },
          { shortcode: "DCeKT3vyosv", type: "reel", thumb: "2024-06.jpg", caption: "Art Mumbai 2024 coverage reel" },
          { shortcode: "DC00RJVyv4V", type: "reel", thumb: "2024-07.jpg", caption: "Art Mumbai 2024 coverage reel" },
          { shortcode: "DDKCi24K5jx", type: "reel", thumb: "2024-08.jpg", caption: "Art Mumbai 2024 coverage reel" },
        ],
        // CHECK the captions: these read as behind-the-scenes and team shots
        // rather than fair-floor coverage, so the wording is deliberately plain.
        photos: [
          { file: "2024-photo-01.jpg", alt: "The team at work during Art Mumbai 2024", width: 900, height: 1600 },
          { file: "2024-photo-02.jpg", alt: "The Aurion Digital team at Art Mumbai 2024", width: 960, height: 1280 },
          { file: "2024-photo-03.jpg", alt: "Behind the scenes at Art Mumbai 2024", width: 960, height: 1280 },
          { file: "2024-photo-04.jpg", alt: "On site at Art Mumbai 2024", width: 960, height: 1280 },
          { file: "2024-photo-05.jpg", alt: "The crew on the way to Art Mumbai 2024", width: 1600, height: 1200 },
          { file: "2024-photo-06.jpg", alt: "Evening at Art Mumbai 2024", width: 960, height: 1280 },
          { file: "2024-photo-07.jpg", alt: "The full team at Art Mumbai 2024", width: 1280, height: 960 },
        ],
      },
    ],
  },
  {
    slug: "stir-adff",
    name: "Stir ADFF",
    kind: "Film festival",
    location: "NCPA, Mumbai",
    period: "Festival coverage",
    excerpt:
      "Coverage across the festival: speaker interviews, screenings, pavilions and the opening night, cut for an architecture and design audience.",
    about: [
      "The Architecture and Design Film Festival by STIR draws an audience that works in those fields, so the coverage had to respect the subject matter. Rushed, generic event footage would have read as out of place against the work being screened.",
      "We ran an interview line through the festival, catching speakers, architects and guests between sessions, and covered the pavilions and the opening night alongside it. Edits were turned around on site, which is why several of the photographs here are of the edit room rather than the red carpet.",
    ],
    whatWeDid: [
      {
        title: "Ran an interview line",
        body: "Speakers, architects and guests caught between sessions, each cut as a short film with a consistent title treatment.",
      },
      {
        title: "Covered the full programme",
        body: "Screenings, pavilions, installations and the opening night, planned against the festival schedule so nothing important was missed.",
      },
      {
        title: "Edited on site",
        body: "An edit room running through the festival, so interviews went out while the speaker was still in the building.",
      },
      {
        title: "Matched the festival's own tone",
        body: "Pacing, type and grading kept deliberately restrained, so the content sat alongside the films rather than competing with them.",
      },
    ],
    services: ["Event coverage", "Interview production", "Reel production", "Organic social"],
    cover: { file: "cover.jpg", alt: "ADFF x STIR Mumbai" },
    photos: [],
    reelGroups: [
      {
        name: "Festival films",
        note: "Speakers, pavilions and sessions",
        reels: [
          { shortcode: "DYNBfsAvk_t", type: "reel", thumb: "reel-01.jpg", caption: "Yellow pavilion installation" },
          { shortcode: "DXQm-7Tj_T4", type: "reel", thumb: "reel-02.jpg", caption: "Terence Lewis at ADFF x STIR Mumbai" },
          { shortcode: "DXMpk_ZD-3D", type: "reel", thumb: "reel-03.jpg", caption: "Mohit Hajela of Jaquar at Pavilion Park" },
          { shortcode: "DXHnWdSDwWz", type: "reel", thumb: "reel-04.jpg", caption: "Aric Chen of the Zaha Hadid Foundation" },
          { shortcode: "DW9Lvqqj3nL", type: "reel", thumb: "reel-05.jpg", caption: "Rahul Kadri of IMK Architects" },
          { shortcode: "DTXuVbwj9e5", type: "reel", thumb: "reel-06.jpg", caption: "Kiran Rao at ADFF x STIR Mumbai" },
          { shortcode: "DTXtu_-j6eL", type: "reel", thumb: "reel-07.jpg", caption: "Vinu Daniel of Wallmakers" },
        ],
        // CHECK the captions below: these describe behind-the-scenes and crew
        // shots rather than festival-floor coverage.
        photos: [
          { file: "photo-01.jpg", alt: "The crew before the festival opening", width: 736, height: 1307 },
          { file: "photo-02.jpg", alt: "The edit room during ADFF x STIR Mumbai", width: 650, height: 1088 },
          { file: "photo-03.jpg", alt: "Cutting festival content on the day", width: 635, height: 767 },
          { file: "photo-04.jpg", alt: "The team at the edit desk", width: 559, height: 943 },
          { file: "photo-05.jpg", alt: "The festival stage at NCPA Mumbai", width: 565, height: 1202 },
          { file: "photo-06.jpg", alt: "The crew after a day of interviews", width: 559, height: 937 },
          { file: "photo-07.jpg", alt: "Opening night of the Architecture and Design Film Festival at NCPA Mumbai", width: 736, height: 1121 },
        ],
      },
    ],
  },
  {
    slug: "id-mumbai",
    name: "ID Mumbai",
    kind: "Design event",
    location: "Mumbai",
    period: "Event coverage",
    excerpt:
      "Coverage across the show floor: the Shigeru Ban session, installations, stands and the visitors moving between them.",
    about: [
      "India Design Mumbai puts architects, designers, brands and a design-literate public in one hall for a few days. It is busy, visually dense and over quickly, which makes planning the difference between usable coverage and a hard drive of footage nobody edits. Lighting varies stand to stand and the best moments are rarely on the schedule.",
      "We worked to a route rather than a timetable: a planned circuit of the floor, repeated through the day, so every area was covered and the edit had a predictable supply of material. The headline sessions were shot separately, with a position held before the room filled.",
    ],
    whatWeDid: [
      {
        title: "Planned a floor route",
        body: "A repeated circuit of the venue instead of chasing moments, which is what makes coverage of a crowded floor complete rather than patchy.",
      },
      {
        title: "Covered the headline sessions",
        body: "A position held before the room filled for the talks that draw the crowd, including the Shigeru Ban session.",
      },
      {
        title: "Fast turnaround",
        body: "Edits delivered through the day, while the event was still running and attention was highest.",
      },
      {
        title: "A photo set for the archive",
        body: "A clean stills library handed over after the event for use in decks, recaps and next year's promotion.",
      },
    ],
    services: ["Event coverage", "Reel production", "Organic social", "Photography"],
    cover: { file: "cover.jpg", alt: "ID Mumbai" },
    photos: [
          { file: "photo-01.jpg", alt: "Shigeru Ban on stage at ID Mumbai", width: 900, height: 1600 },
          { file: "clip-01-poster.jpg", video: "clip-01.mp4", alt: "Shigeru Ban speaking at ID Mumbai", width: 800, height: 1422 },
          { file: "clip-02-poster.jpg", video: "clip-02.mp4", alt: "The Shigeru Ban session in full flow", width: 800, height: 1422 },
          { file: "clip-03-poster.jpg", video: "clip-03.mp4", alt: "The Wicker Story installation at ID Mumbai", width: 800, height: 1422 },
          { file: "clip-04-poster.jpg", video: "clip-04.mp4", alt: "Private Luxury signage on the show floor", width: 800, height: 1422 },
          { file: "clip-05-poster.jpg", video: "clip-05.mp4", alt: "Visitors at a stand during ID Mumbai", width: 800, height: 1422 },
          { file: "photo-02.jpg", alt: "The team at the ID Mumbai media wall", width: 589, height: 1046 },
          { file: "photo-03.jpg", alt: "The Aurion Digital team at ID Mumbai", width: 472, height: 769 },
          { file: "photo-04.jpg", alt: "On site at ID Mumbai", width: 589, height: 1046 },
    ],
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
