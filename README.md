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
bellocorp-international are scaffolded with placeholder text ("Add industry",
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

## Before launch
- Confirm testimonial names and titles in lib/content.ts
- Set site.whatsapp to the real number: every CTA (Let's Talk, Start a Project,
  Talk to the team, Get results like these, the floating button) opens WhatsApp
- Set site.contactHref if you add an email link anywhere
- Add reel thumbnails to public/images/work and set `image` on each work item
- Optional: set smarterChoice.image to a team photo to replace the chart panel
- Connect the footer newsletter form (Footer.tsx, onSubmit)
