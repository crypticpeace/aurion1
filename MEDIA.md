# Adding photos and reels, client by client

Each client has one data file and one media folder. Nothing else needs touching.

| Client | Data file | Media folder |
| --- | --- | --- |
| Catch25 Science Academy | `lib/clients/catch-25.ts` | `public/images/work/catch-25/` |
| Freelance | `lib/clients/freelance.ts` | `public/images/work/freelance/` |
| Nyraj Vasani | `lib/clients/nyraj-vasani.ts` | `public/images/work/nyraj-vasani/` |
| All Things Design | `lib/clients/all-things-design.ts` | `public/images/work/all-things-design/` |
| Scholar Medico Services | `lib/clients/scholar-medico-services.ts` | `public/images/work/scholar-medico-services/` |
| UWS | `lib/clients/uws.ts` | `public/images/work/uws/` |
| TABU | `lib/clients/tabu.ts` | `public/images/work/tabu/` |
| 5paisa | `lib/clients/5paisa.ts` | `public/images/work/5paisa/` |
| A&H Capital | `lib/clients/ah-capital.ts` | `public/images/work/ah-capital/` |
| Maxus Cakes | `lib/clients/maxus-cakes.ts` | `public/images/work/maxus-cakes/` |
| Vit and Rich | `lib/clients/vit-and-rich.ts` | `public/images/work/vit-and-rich/` |
| Rikaayin | `lib/clients/rikaayin.ts` | `public/images/work/rikaayin/` |
| Debt2NoDebt | `lib/clients/debt2nodebt.ts` | `public/images/work/debt2nodebt/` |
| Bellocorp International | `lib/clients/bellocorp-international.ts` | `public/images/work/bellocorp-international/` |

## Steps for any client

1. Drop the files into that client's media folder:
   - `logo.svg` or `logo.png`, transparent, around 400px wide
   - `01.jpg`, `02.jpg`, ... grid previews, 4:5 at 1080x1350
   - `01.mp4`, `02.mp4`, ... optional self-hosted reels, 1080x1920 H.264, under ~10MB
   - `cover.jpg` for the home page carousel card, 9:16 at 1080x1920

2. Open that client's data file and name the files:

```ts
logo: "logo.svg",

posts: [
  { shortcode: "Cx1abcD2efg", type: "reel", thumb: "01.jpg", video: "01.mp4",
    caption: "Pay Later (MTF) explained in 30 seconds",
    stats: { views: "1.2M", likes: "4.3K" } },
  { shortcode: "Cx2hijK3lmn", type: "carousel", thumb: "02.jpg",
    caption: "Margin trading myths, busted", stats: { likes: "2.1K" } },
],
```

`shortcode` is the id in the post URL: instagram.com/p/**Cx1abcD2efg**/ or /reel/**Cx1abcD2efg**/.
Without `video`, tapping the tile loads the official Instagram embed. With `video`,
it plays your own file, which keeps working if a visitor blocks Instagram.
Add as many posts as you like: the grid flows to any number.

3. For the home page carousel, set the cover in `lib/content.ts`:

```ts
{ slug: "5paisa", client: "5paisa", project: "Pay Later (MTF)",
  category: "Performance creative", image: "/images/work/5paisa/cover.jpg" },
```

4. `npm run build`.

## Live event photos
Events are separate from clients: they live in `lib/events.ts` and render at
/events/<slug>. Photographs go in `public/images/events/<slug>/` and are listed
in that event's `photos` array:

```ts
photos: [
  { file: "01.jpg", alt: "Opening day on the fair floor", span: "wide" },
  { file: "02.jpg", alt: "Gallery walkthrough" },
],
```

`span: "wide"` makes a photo two columns, `span: "tall"` two rows. Use one or
two per gallery, otherwise the grid stops reading as a gallery. `file: null`
shows a numbered placeholder, so the page looks finished before the photos land.

| Event | Data | Photo folder |
| --- | --- | --- |
| Art Mumbai | `lib/events.ts` | `public/images/events/art-mumbai/` |
| Stir ADFF | `lib/events.ts` | `public/images/events/stir-adff/` |
| ID Mumbai | `lib/events.ts` | `public/images/events/id-mumbai/` |

## Event reels (Art Mumbai)
An event can show Instagram reels instead of photographs. Set `reelGroups` on
the event in lib/events.ts and the page renders one titled grid per group,
with the same lightbox the client pages use. Thumbnails go in the event's
folder and are named on each reel:

```ts
reelGroups: [
  {
    name: "2026 edition",
    note: "Countdown and ticket campaign",
    reels: [
      { shortcode: "Dd78tnABKy9", type: "reel", thumb: "2026-01.jpg",
        caption: "Art Mumbai 2026 campaign reel" },
    ],
  },
],
```

Instagram blocks hotlinking of its own thumbnails, so each reel needs your own
4:5 image in public/images/events/<slug>/.

A group can also carry photographs, shown under its reels:

```ts
photos: [
  { file: "2024-photo-01.jpg", alt: "What the photo shows", width: 960, height: 1280 },
],
```

Photographs render as a masonry gallery at their own proportions, never cropped,
so portrait stays tall and a wide group shot stays wide. Give each one its real
pixel `width` and `height` (right-click the file, or `sips -g pixelWidth -g
pixelHeight photo.jpg` on a Mac) so the page reserves the correct space and does
not jump while images load. Missing sizes fall back to 4:5. Store the full
photo, not a crop: the lightbox shows the whole frame.

### Self-hosted clips
A gallery item can be a video we host ourselves rather than an Instagram embed.
Put the MP4 and a poster frame in the event folder and reference both:

```ts
{ file: "clip-01-poster.jpg", video: "clip-01.mp4",
  alt: "What the clip shows", width: 800, height: 1422 },
```

The tile shows the poster with a play badge and the lightbox plays the file, so
it works even where Instagram is blocked. Encode for the web before committing,
or a phone clip will be 30MB+:

```
ffmpeg -i IN.MP4 -vf "scale=1080:-2,fps=30" -c:v libx264 -preset slow -crf 26   -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k clip-01.mp4
ffmpeg -ss 1 -i IN.MP4 -frames:v 1 -vf scale=800:-2 -q:v 3 clip-01-poster.jpg
```

That brings a 10 second iPhone clip to roughly 2 to 4MB. `-movflags +faststart`
matters: without it the browser downloads the whole file before playing.

### Event card image
By default the /events card uses the first reel thumbnail or first photograph.
All three events instead use a brand panel, set with `cover`:

```ts
cover: { file: "cover.jpg", alt: "ID Mumbai" },
```

The card fills edge to edge, so the cover must already be a finished 4:3 image.
Do not drop a square logo file in here: it letterboxes, and the card reads as a
logo boxed inside a box.

`scripts/event_covers.py` builds these. It trims each supplied logo off its own
background and re-sets the mark on a full-bleed 1200x900 panel in that brand's
colour — Art Mumbai navy, ID Mumbai and ADFF x STIR near-black — at a consistent
optical size, so the three cards read as one set. To add a fourth event, put its
logo in the event folder, add a block to that script, and run:

```
pip install pillow cairosvg
python3 scripts/event_covers.py
```

An event with `reelGroups` ignores its top-level `photos`.

### Gallery sections
An event without `reelGroups` splits its `photos` into two grids on the page:
everything with a `video` under **Films**, everything else under
**Photographs**. Order within each follows the array. The films grid is a true
grid (four across on desktop) because the clips share one ratio; the photographs
use the masonry gallery, where each image keeps its own proportions. Pass
`layout="grid"` to `PhotoGallery` for any other set that is all one ratio.

Reel grids are four across on desktop, three on tablet, two on mobile. The photo
gallery uses the same column counts, with each photo at its natural height.

## Home page case-study covers
The carousel on the home page reads `image` on each entry in `work` in
lib/content.ts, pointing at /public/images/work/<slug>/cover.jpg, 9:16 at
1080x1920. `scripts/home_covers.py` builds them three ways:

- **reel** — a real reel cover already shot at 9:16, used as it is.
- **panel** — a real 4:5 creative on a blurred, darkened blow-up of itself, so
  the whole artwork survives instead of being cropped to a third of its width.
- **card** — a typographic title card for a client with no stills yet. It is
  deliberately graphic and never pretends to be a frame from a reel. 5paisa and
  All Things Design use one today; replace either by dropping a real 9:16 cover
  at the same path and rerunning nothing.

The card draws its own category chip top-left, a "Watch reel" badge
bottom-left and a dark gradient over the lower third, so cover art must keep
those bands clear and should not repeat the category in the image.

## Multi-brand grids
A client with `collections` gets one grid per brand. Name its thumbnails by
brand rather than by number, so a new reel drops into the right grid:
freelance uses `astrid-NN.jpg`, `cage-NN.jpg`, `dinus-NN.jpg`, `maxus-NN.jpg`
and `pmb-NN.jpg`. A client with a single grid just numbers them `NN.jpg`.
Add a client by adding an entry to CLIENTS in that script.

A post's `type` drives the badge on the tile and nothing else: `reel` gets a
play badge, `carousel` a copy badge, `post` none. Every link is built as
instagram.com/p/<shortcode>/, which Instagram serves for all media types,
so mislabelling one costs a wrong icon rather than a dead link. The quickest
way to tell them apart is the cover's shape: 9:16 is a reel, 4:5 a static post.

A post whose cover you have but whose link you do not takes
`shortcode: null`. The tile shows in the grid and opens its own image, with
no Instagram embed and no link out. Fill the shortcode in later and it becomes
a live post with no other change.
`scripts/reel_thumbs.py` crops reel covers from 9:16 to the 4:5 grid ratio,
anchoring on where the detail sits but never taking more than 6% off the top,
because the logo and headline live in that band.

## Client website showcase
A client we also built a website for sets `website` in its client file, and the
case study renders it above the Instagram grid in a browser frame:

```ts
website: {
  url: "https://www.allthingsdesign.in/",
  label: "allthingsdesign.in",
  blurb: "One or two lines on what was built.",
  desktop: "site-desktop.jpg",      // 1600x1000
  desktopAlt: "site-gallery.jpg",   // optional second page, 1600x1000
  mobile: "site-mobile.jpg",        // optional, 540 wide
},
```

Capture the shots at a 2x device scale and downsample, so the type in the
screenshot stays sharp. Recapture them when the client's site is redesigned:
a case study showing a version that no longer exists is worse than no shot.

## Blog covers
Each post points at an image in public/images/blog/<slug>.jpg via `cover` in
lib/blog.ts. Covers are 1600x1000 (16:10), which serves the lead card, the small
cards and the article hero. `cover: null` falls back to a gradient placeholder.

The current four are geometric compositions in the brand palette rather than
stock photography, generated by `scripts/blog_covers.py` so the index reads as
one designed set. Swap in a
photograph any time: same path, same ratio.

## Adding a client

Copy any file in `lib/clients/`, change the slug and details, import it in
`lib/clients/index.ts` and add it to the list, then create
`public/images/work/<slug>/`. The page appears at `/work/<slug>` on the next build.
