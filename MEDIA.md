# Adding photos and reels, client by client

Each client has one data file and one media folder. Nothing else needs touching.

| Client | Data file | Media folder |
| --- | --- | --- |
| 5paisa | `lib/clients/5paisa.ts` | `public/images/work/5paisa/` |
| Art Mumbai | `lib/clients/art-mumbai.ts` | `public/images/work/art-mumbai/` |
| Catch 25 | `lib/clients/catch-25.ts` | `public/images/work/catch-25/` |
| Debt2NoDebt | `lib/clients/debt2nodebt.ts` | `public/images/work/debt2nodebt/` |
| Rikaayin | `lib/clients/rikaayin.ts` | `public/images/work/rikaayin/` |
| All Things Design | `lib/clients/all-things-design.ts` | `public/images/work/all-things-design/` |
| Scholar Medico Services | `lib/clients/scholar-medico-services.ts` | `public/images/work/scholar-medico-services/` |
| Nyraj Vasani | `lib/clients/nyraj-vasani.ts` | `public/images/work/nyraj-vasani/` |
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

## Adding a client

Copy any file in `lib/clients/`, change the slug and details, import it in
`lib/clients/index.ts` and add it to the list, then create
`public/images/work/<slug>/`. The page appears at `/work/<slug>` on the next build.
