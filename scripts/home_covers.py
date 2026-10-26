"""
Home page case-study carousel covers, 9:16 at 1080x1920.

Three kinds, depending on what media the client has:

  reel   — a real reel cover already shot at 9:16, used as it is.
  panel  — a real 4:5 creative centred on a panel in a colour sampled from the
           creative itself, so the whole artwork survives instead of being
           cropped to a third of its width.
  card   — a typographic title card in the site's own language, for a client
           with no stills yet. Deliberately graphic, never pretending to be
           a frame from a reel. Replace it the moment real media arrives.
"""
import pathlib
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = pathlib.Path("/home/claude/crypticpeace/aurion1/public/images/work")
UP = pathlib.Path("/root/.claude/uploads/0a46ebae-4f59-5fbb-970b-48286baedf44")
FONT = "/tmp/claude-0/-home-claude/0a46ebae-4f59-5fbb-970b-48286baedf44/scratchpad/inter-tight.ttf"

W, H = 1080, 1920
ORANGE = (254, 91, 7)
INK = (22, 22, 22)


def f(size, ):
    return ImageFont.truetype(FONT, size)


def save(im, slug):
    out = ROOT / slug / "cover.jpg"
    out.parent.mkdir(parents=True, exist_ok=True)
    im.save(out, quality=86, optimize=True, progressive=True)
    print(f"{slug}/cover.jpg  {out.stat().st_size // 1024}KB")


def reel(src: pathlib.Path, slug: str):
    im = Image.open(src).convert("RGB")
    # Trim to exactly 9:16 before scaling, in case the source is slightly off.
    want_h = round(im.width * H / W)
    if want_h < im.height:
        top = (im.height - want_h) // 2
        im = im.crop((0, top, im.width, top + want_h))
    save(im.resize((W, H), Image.LANCZOS), slug)


def panel(src: pathlib.Path, slug: str):
    """4:5 creative on a blurred, darkened blow-up of itself."""
    art = Image.open(src).convert("RGB")

    # Backdrop: cover-crop the artwork to 9:16, blur it hard, darken it.
    cover_scale = max(W / art.width, H / art.height)
    back = art.resize((round(art.width * cover_scale), round(art.height * cover_scale)),
                      Image.LANCZOS)
    back = back.crop(((back.width - W) // 2, (back.height - H) // 2,
                      (back.width - W) // 2 + W, (back.height - H) // 2 + H))
    back = back.filter(ImageFilter.GaussianBlur(48))
    back = Image.blend(back, Image.new("RGB", (W, H), INK), 0.42)

    # The creative itself, inset so the carousel's own chip and play badge have
    # room at the top and bottom corners.
    inset_w = round(W * 0.88)
    fg = art.resize((inset_w, round(art.height * inset_w / art.width)), Image.LANCZOS)
    back.paste(fg, ((W - inset_w) // 2, (H - fg.height) // 2))
    save(back, slug)


def card(slug: str, name: str, line: str, accent):
    """
    Title card for a client with no stills yet.

    The carousel draws its own category chip in the top-left and a "Watch reel"
    badge in the bottom-left, and lays a dark gradient over the lower third, so
    the artwork keeps both of those bands clear and sets its type in the middle
    of the frame. It carries no category label of its own, because the chip
    already says that.
    """
    S = 2
    im = Image.new("RGB", (W * S, H * S), INK)
    d = ImageDraw.Draw(im, "RGBA")

    # A field of concentric arcs sweeping out of the right edge, the same
    # device as the event-coverage blog cover, so the set stays related.
    ox, oy = W * S + 120 * S, H * S * 0.52
    for i in range(16):
        r = 300 * S + i * 86 * S
        d.arc([ox - r, oy - r, ox + r, oy + r], start=120, end=240,
              fill=(*accent, max(200 - i * 11, 34)),
              width=(6 if i % 3 == 0 else 2) * S)

    # Client name on the mid-left, project line beneath, orange rule above.
    x = 84 * S
    big, small = f(96 * S), f(36 * S)
    lines = name.split("\n")
    block = len(lines) * 104 * S + 70 * S
    y = round(H * S * 0.5 - block / 2)

    d.line([(x, y - 46 * S), (x + 60 * S, y - 46 * S)], fill=ORANGE, width=4 * S)
    for word_line in lines:
        d.text((x, y), word_line, font=big, fill=(255, 255, 255))
        y += 104 * S
    d.text((x, y + 22 * S), line, font=small, fill=(255, 255, 255, 160))

    save(im.resize((W, H), Image.LANCZOS), slug)


# Every featured client now has real reel covers, so each card uses one of
# that client's own 9:16 covers. No title cards: a card only earns a place on
# the home page once there is real work to show on it.
reel(UP / "9ed88f34-image.jpg", "5paisa")                   # What is Pay Later (MTF)
reel(UP / "56f78783-image.jpg", "freelance")            # Pack My Bag, Bali
reel(UP / "fffac60d-image.jpg", "catch-25")                # SSC result 2026
reel(UP / "9dd0c791-image.jpg", "all-things-design")        # corner cabin
reel(UP / "a7b33b4c-image.jpg", "nyraj-vasani")            # Poison Cup trophy lift
reel(UP / "a9a9d308-image.jpg", "tabu")                    # red bridal look
reel(UP / "695188b3-image.jpg", "scholar-medico-services")  # SMS student experience

if len(sys.argv) > 1:
    slugs = ["5paisa", "freelance", "catch-25", "all-things-design",
             "nyraj-vasani", "tabu", "scholar-medico-services"]
    sheet = Image.new("RGB", (len(slugs) * 230, 410), (20, 20, 20))
    for i, s in enumerate(slugs):
        sheet.paste(Image.open(ROOT / s / "cover.jpg").resize((226, 402), Image.LANCZOS),
                    (i * 230 + 2, 4))
    sheet.save(sys.argv[1])
    print("sheet ->", sys.argv[1])
