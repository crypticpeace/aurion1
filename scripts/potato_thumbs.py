"""
Potato Media grid thumbnails.

The supplied files are reel covers at 9:16. The work grid is 4:5, so each one
needs 30% of its height removed. A plain centre crop cuts the branding off the
top of several of them, so the crop is anchored on the vertical centre of mass
of row-to-row detail — where the type and the subject actually are — and then
clamped so it never runs past the frame.
"""
import pathlib
import sys

from PIL import Image

UP = pathlib.Path("/root/.claude/uploads/0a46ebae-4f59-5fbb-970b-48286baedf44")
OUT = pathlib.Path("/home/claude/crypticpeace/aurion1/public/images/work/potato-media")
W, H = 1080, 1350

# Supplied in posting order per brand.
SETS = {
    "pmb": ["b55aac2a", "22effa69", "56f78783", "fede9141"],
    "maxus": ["8a866b64", "cf2cb5bb", "a2a8eb0f", "bb3a4a48"],
    "cage": ["a4fc7a57", "be761bc6", "b5d43b86", "1b6c268f", "d3511760",
             "d65b084a", "775bdc30", "296abd17", "b3bb22b6"],
    "astrid": ["f6a6508e", "cb742ce8", "c6f21683"],
    "dinus": ["20701663", "a1416636", "63859769", "fd0ae07a"],
}


def detail_centre(im: Image.Image) -> float:
    """Fraction down the frame where row-to-row detail is concentrated."""
    g = im.convert("L").resize((64, 256), Image.BILINEAR)
    px = g.load()
    weights = []
    for y in range(256):
        row = [px[x, y] for x in range(64)]
        mean = sum(row) / 64
        weights.append(sum((v - mean) ** 2 for v in row) / 64)
    total = sum(weights)
    if total <= 0:
        return 0.5
    return sum(w * (y + 0.5) for y, w in enumerate(weights)) / total / 256


def crop_45(im: Image.Image) -> Image.Image:
    want_h = round(im.width * H / W)
    if want_h >= im.height:  # already squarer than 4:5 — crop width instead
        want_w = round(im.height * W / H)
        left = (im.width - want_w) // 2
        box = (left, 0, left + want_w, im.height)
    else:
        centre = detail_centre(im)
        top = round(centre * im.height - want_h / 2)
        # Reel covers carry the logo and the headline in the top band, so never
        # take more than 6% off the top however low the detail sits. What goes
        # instead is the bottom, which on these covers is usually empty frame.
        top = max(0, min(im.height - want_h, top, round(0.06 * im.height)))
        box = (0, top, im.width, top + want_h)
    return im.crop(box).resize((W, H), Image.LANCZOS)


OUT.mkdir(parents=True, exist_ok=True)
made = []
for prefix, ids in SETS.items():
    for i, stem in enumerate(ids, 1):
        src = UP / f"{stem}-image.jpg"
        name = f"{prefix}-{i:02d}.jpg"
        crop_45(Image.open(src).convert("RGB")).save(
            OUT / name, quality=84, optimize=True, progressive=True)
        made.append((name, (OUT / name).stat().st_size // 1024))

for name, kb in made:
    print(f"{name}  {kb}KB")
print(len(made), "thumbnails")

# Contact sheet so the crops can be checked at a glance.
if len(sys.argv) > 1:
    cols = 5
    rows = (len(made) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * 220, rows * 275), (20, 20, 20))
    for i, (name, _) in enumerate(made):
        t = Image.open(OUT / name).resize((216, 270), Image.LANCZOS)
        sheet.paste(t, ((i % cols) * 220 + 2, (i // cols) * 275 + 2))
    sheet.save(sys.argv[1])
    print("sheet ->", sys.argv[1])
