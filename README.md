# Aurion Digital website

Next.js 14 (App Router, static export) + Tailwind CSS + TypeScript.

## Run
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out, ready for Vercel or any host

## Where to edit
- lib/content.ts: site copy, services, work items, testimonials, FAQs, contact and WhatsApp
- lib/clients/<slug>.ts: one file per client case study (see MEDIA.md)
- public/images: logo and hero renders (swap for the master SVG logo and original 3D renders)
- tailwind.config.ts: brand colours (brand = #FE5B07, ink = #161616) and fonts

## Work pages
/work lists every client as a logo tile; each tile opens that client's case study
at /work/<slug>. Add the logo file to public/images/work/<slug>/ and set
`logo: "logo.svg"` on the client (transparent PNG or SVG, around 400px wide).
Leaving logo as null shows the client name set in type instead.

## Client case study pages
Each client has a page at /work/<slug>, e.g. /work/5paisa. Edit lib/clients.ts:
- posts[].shortcode: the id from the post URL (instagram.com/p/<shortcode>/ or /reel/<shortcode>/)
- posts[].thumb: the grid preview image. Save the file in public/images/work/<slug>/
  and put just the file name here, e.g. thumb: "01.jpg" for 5paisa loads
  /images/work/5paisa/01.jpg. A value starting with "/" is treated as a full path.
  Previews are cropped to 4:5, so export at 1080x1350. Instagram blocks hotlinking,
  which is why the grid uses your own images while the lightbox loads the official embed.
- metrics: currently sample figures. Replace with numbers from the client's Instagram Insights.

## Adding a new client
1. mkdir public/images/work/<slug>   (slug is lowercase with hyphens, e.g. "sunday-pure")
2. Drop the grid previews in that folder, exported at 1080x1350 (4:5).
3. Add an entry to the `clients` array in lib/clients.ts (copy an existing one and edit it).
   Everything is optional except slug, name, handle, industry, period, summary,
   services, metrics, highlights, posts, instagramUrl.
4. Add the same client to the `work` array in lib/content.ts so it shows in the
   home page carousel. `slug` there must match the slug in lib/clients.ts.
5. npm run build. The page is generated automatically at /work/<slug>.

## Clients still to fill in
debt2nodebt, rikaayin, all-things-design, scholar-medico-services, nyraj-vasani,
bellcorp are scaffolded with placeholder text ("Add industry",
"Add caption", zero metrics) and draftPosts(). Replace industry, period, summary,
services, metrics, highlights and the posts before these pages go live.

## Images and reels
- Home carousel cover: public/images/work/<slug>/cover.jpg (9:16, 1080x1920),
  then set `image: "/images/work/<slug>/cover.jpg"` in lib/content.ts.
- Client logo: public/images/work/<slug>/logo.svg, then `logo: "logo.svg"`.
- Grid previews: public/images/work/<slug>/01.jpg (4:5, 1080x1350), then `thumb: "01.jpg"`.
- Reels: set `shortcode` to play the Instagram embed, or drop an MP4 next to the
  preview (e.g. 01.mp4) and set `video: "01.mp4"` to play it from your own server.
- Team photo in the "smarter choice" section: set smarterChoice.image in lib/content.ts.
Keep JPGs under ~300KB and MP4s under ~10MB (H.264, 1080x1920).

## Homepage SEO (Oct 2026 content plan)
- One <h1> per page. On the homepage it is the hero eyebrow, "Digital marketing
  agency in Kandivali West, Mumbai"; "Brands That Grow" is styled text, not a heading.
- Meta title, description, canonical and Open Graph live in app/layout.tsx.
- components/Schema.tsx holds the ProfessionalService and FAQPage JSON-LD, built
  from lib/content.ts. Keep the address, phone and sameAs links identical to the
  Google Business Profile.
- Service pages do not exist yet. Set `href` on a service in lib/content.ts
  (e.g. "/services/social-media-marketing") and that card becomes a link.
- /pricing was dropped from the nav in favour of /blog. If the live site has a
  /pricing URL, 301 it to the contact route at the host or CDN: static export
  cannot serve redirects.
- Every CTA opens WhatsApp rather than a /contact page, as agreed. Change
  whatsappHref usages if a contact page is added later.

## Blog
- Posts live in lib/blog.ts. Each one builds a page at /blog/<slug> with its own
  title, description, canonical and BlogPosting schema.
- The four current posts are SAMPLE ARTICLES: review the claims and pricing
  ranges before publishing, or replace them.
- Cover images: /public/images/blog/<slug>.jpg at 1600x1000, then set `cover`.
  Null shows a gradient placeholder. The current covers are brand-built
  graphics, not stock photos.

## Case study pages carry no figures
Client pages show `outcomes` (a title and a sentence each) instead of follower
counts, view counts or percentages. Numbers on a public page have to survive the
client opening their own dashboard, so these are written as claims that stand
without one. Post hover states and the page header carry no counts either.
If a client ever supplies verified figures, add them deliberately rather than
reintroducing the old metrics block.

## Live events
/events lists Art Mumbai, Stir ADFF and ID Mumbai, each opening a photo gallery
with a lightbox plus a write-up of the event and what we did. Content is in
lib/events.ts; photos in public/images/events/<slug>/. The write-ups are DRAFTS
describing our standard on-ground coverage: check them against what actually
happened before publishing.

Art Mumbai moved from /work/art-mumbai to /events/art-mumbai. If the old URL is
live anywhere, 301 it at the host.

Art Mumbai now carries 15 real reels in two groups, 2026 (countdown and ticket
campaign) and 2024 (on-ground coverage), each with its own 4:5 thumbnail, plus
7 photographs. ID Mumbai carries 5 self-hosted clips and 4 photographs, and its
card on /events shows the ID Mumbai logo rather than a photo. All three event
cards now use their event's logo. Stir ADFF carries
14 reels and 7 photographs, with the ADFF x STIR logo on its card; 7 of its 14
reels still need thumbnails (they show numbered placeholders until then).

## Fonts are self-hosted, deliberately
app/fonts holds the Inter Tight and Caveat woff2 files, loaded with
next/font/local in app/layout.tsx. Do not switch back to next/font/google:
it downloads the font during the build, and when that request fails on the
build machine Next.js substitutes a system font without failing the build. The
result is a deploy that renders in the wrong typeface while local builds look
correct. Keeping the files in the repo removes the network from the build.

Commit app/fonts with the rest of the code. To change a typeface, drop a new
woff2 in that folder and point localFont at it.

## Careers page
/careers embeds a Google Form in an iframe, so applications go straight to the
Aurion Google account with no backend here. Set both URLs in lib/content.ts
under `careers`:
- formEmbedUrl: in the form, Send -> embed (<>) -> copy the src out of the
  iframe snippet. It ends in /viewform?embedded=true.
- formShareUrl: the normal share link, used by the "open in a new tab" fallback
  for browsers that block third-party frames.
To get applications by email: form -> Responses -> turn on "Get email
notifications for new responses". Link a Google Sheet from the same tab to keep
the answers in a spreadsheet.
The open-roles list is hardcoded in app/careers/page.tsx. Remove a role once it
is filled.

## Privacy policy
/privacy-policy, linked from the footer. It is a WORKING DRAFT matching what
the site actually does today, not legal advice. Have a lawyer read it before
launch. Square brackets in the page mark the parts that need a real answer,
including the analytics tools you actually install and how long job
applications are kept. Update `legal.privacyUpdated` in lib/content.ts whenever
the text changes.

## Before launch
- Confirm testimonial names and titles in lib/content.ts
- Set site.whatsapp to the real number: every CTA (Let's Talk, Start a Project,
  Talk to the team, Get results like these, the floating button) opens WhatsApp
- Set site.contactHref if you add an email link anywhere
- Set contact.googleReviewsUrl to the review-list link, not the map pin
- Set the careers Google Form URLs and turn on its email notifications
- Have the privacy policy reviewed, and fill in the bracketed sections
- Add reel thumbnails to public/images/work and set `image` on each work item
- Optional: set smarterChoice.image to a team photo to replace the chart panel
- Connect the footer newsletter form (Footer.tsx, onSubmit)
