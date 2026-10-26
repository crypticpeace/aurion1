"""
Blog cover art for auriondigital.in.

No stock photography: each cover is a geometric composition built from the
site's own language (the orange, the ink, hairlines, the 9:16 reel frame) so the
blog index reads as one designed set rather than a grid of bought images.
Drawn at 2x and downsampled for clean edges.
"""
import pathlib
import sys

from PIL import Image, ImageDraw, ImageFont

OUT = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else (
    pathlib.Path(__file__).resolve().parent.parent / "public" / "images" / "blog"
)
FONT_PATH = "/tmp/claude-0/-home-claude/0a46ebae-4f59-5fbb-970b-48286baedf44/scratchpad/inter-tight.ttf"

W, H = 1600, 1000
S = 2  # supersample factor

ORANGE = (254, 91, 7)
INK = (22, 22, 22)
PAPER = (247, 247, 247)
WHITE = (255, 255, 255)


def canvas(bg):
    im = Image.new("RGB", (W * S, H * S), bg)
    return im, ImageDraw.Draw(im, "RGBA")


def label(d, text, colour):
    """The site's eyebrow treatment: a short rule, then tracked uppercase."""
    try:
        f = ImageFont.truetype(FONT_PATH, 22 * S)
    except OSError:
        f = ImageFont.load_default()
    x, y = 90 * S, H * S - 96 * S
    d.line([(x, y + 11 * S), (x + 44 * S, y + 11 * S)], fill=ORANGE, width=2 * S)
    tracked = "  ".join(text.upper())
    d.text((x + 66 * S, y), tracked, font=f, fill=colour)


def save(im, name):
    im.resize((W, H), Image.LANCZOS).save(OUT / name, quality=86, optimize=True, progressive=True)
    print(name, (OUT / name).stat().st_size // 1024, "KB")


def cover_pricing():
    """Columns of different heights: the shape of a quote broken into parts."""
    im, d = canvas(INK)
    base = 760 * S
    x = 150 * S
    heights = [150, 230, 190, 330, 270, 420, 350]
    widths = [70, 70, 70, 110, 70, 150, 70]
    for i, (hh, ww) in enumerate(zip(heights, widths)):
        top = base - hh * S
        fill = ORANGE if i in (3, 5) else (255, 255, 255, 28)
        d.rectangle([x, top, x + ww * S, base], fill=fill)
        if i not in (3, 5):
            d.rectangle([x, top, x + ww * S, base], outline=(255, 255, 255, 60), width=1 * S)
        x += (ww + 38) * S
    d.line([(90 * S, base), (W * S - 90 * S, base)], fill=(255, 255, 255, 70), width=1 * S)
    label(d, "Pricing", (255, 255, 255, 190))
    return im


def cover_reels():
    """A row of 9:16 frames, the format the piece is about."""
    im, d = canvas(PAPER)
    fw, fh = 150, 267
    gap = 44
    total = 5 * fw + 4 * gap
    x = (W - total) // 2
    for i in range(5):
        offset = (-30, 20, -50, 10, -14)[i]
        top = (H - fh) // 2 + offset - 40
        box = [x * S, top * S, (x + fw) * S, (top + fh) * S]
        if i == 2:
            d.rounded_rectangle(box, radius=14 * S, fill=ORANGE)
            cx, cy = (box[0] + box[2]) / 2, (box[1] + box[3]) / 2
            r = 26 * S
            d.polygon([(cx - r * 0.45, cy - r * 0.62), (cx - r * 0.45, cy + r * 0.62), (cx + r * 0.7, cy)],
                      fill=WHITE)
        else:
            d.rounded_rectangle(box, radius=14 * S, outline=INK, width=2 * S)
            for ln in range(3):
                ly = box[1] + (60 + ln * 26) * S
                d.line([(box[0] + 22 * S, ly), (box[2] - (22 + ln * 30) * S, ly)],
                       fill=(22, 22, 22, 55), width=2 * S)
        x += fw + gap
    label(d, "Social media", (22, 22, 22, 170))
    return im


def cover_ads():
    """Two fields meeting: demand that exists, and demand you create."""
    im, d = canvas(PAPER)
    r = 230
    cy = 420
    left = (W // 2 - r + 70, cy)
    right = (W // 2 + r - 70, cy)
    d.ellipse([(left[0] - r) * S, (cy - r) * S, (left[0] + r) * S, (cy + r) * S], fill=INK)
    d.ellipse([(right[0] - r) * S, (cy - r) * S, (right[0] + r) * S, (cy + r) * S],
              fill=(254, 91, 7, 236))
    for i in range(7):
        y = (cy + r + 70 + i * 26) * S
        w = (W - 180 - i * 90) * S
        d.line([(90 * S, y), (90 * S + w, y)], fill=(22, 22, 22, 40), width=2 * S)
    label(d, "Performance", (22, 22, 22, 170))
    return im


def cover_events():
    """Arcs spreading from a point: coverage leaving the venue."""
    im, d = canvas(INK)
    ox, oy = 300, 700
    for i in range(9):
        r = 120 + i * 118
        alpha = 245 - i * 16
        d.arc([(ox - r) * S, (oy - r) * S, (ox + r) * S, (oy + r) * S],
              start=268, end=356, fill=(254, 91, 7, max(alpha, 90)), width=(4 if i % 3 == 0 else 2) * S)
    d.ellipse([(ox - 13) * S, (oy - 13) * S, (ox + 13) * S, (oy + 13) * S], fill=ORANGE)
    label(d, "Event marketing", (255, 255, 255, 190))
    return im


OUT.mkdir(parents=True, exist_ok=True)
save(cover_pricing(), "digital-marketing-cost-mumbai.jpg")
save(cover_reels(), "instagram-reels-strategy-indian-brands.jpg")
save(cover_ads(), "meta-ads-vs-google-ads-lead-generation.jpg")
save(cover_events(), "live-event-content-coverage.jpg")
