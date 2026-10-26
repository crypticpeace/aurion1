"""
Event card covers for /events.

Each brand supplied a square logo lock-up on its own background. Dropping that
square into a 4:3 card left a letterboxed tile — a logo sitting in a box inside
a box. Instead we trim each mark off its background and re-set it on a full-bleed
4:3 panel in the brand's own colour, at a consistent optical size, so the three
cards read as one set.

Drawn at 2x and downsampled.
"""
import pathlib
import subprocess
import sys

import cairosvg
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent / "public" / "images" / "events"
W, H = 1200, 900
S = 2


def trim(im: Image.Image, bg, tol=26) -> Image.Image:
    """Bounding box of everything that is not the flat background colour."""
    px = im.convert("RGB")
    mask = Image.new("L", px.size, 0)
    mp = mask.load()
    sp = px.load()
    for y in range(px.height):
        for x in range(px.width):
            r, g, b = sp[x, y]
            if abs(r - bg[0]) + abs(g - bg[1]) + abs(b - bg[2]) > tol:
                mp[x, y] = 255
    box = mask.getbbox()
    return im.crop(box) if box else im


def place(mark: Image.Image, bg, name, frac_w=0.56, frac_h=0.60):
    """Centre `mark` on a 4:3 panel of `bg`, scaled to fit the given fractions."""
    canvas = Image.new("RGB", (W * S, H * S), bg)
    scale = min((W * S * frac_w) / mark.width, (H * S * frac_h) / mark.height)
    size = (max(1, round(mark.width * scale)), max(1, round(mark.height * scale)))
    m = mark.resize(size, Image.LANCZOS)
    pos = ((W * S - size[0]) // 2, (H * S - size[1]) // 2)
    canvas.paste(m, pos, m if m.mode == "RGBA" else None)
    out = ROOT / name / "cover.jpg"
    canvas.resize((W, H), Image.LANCZOS).save(out, quality=90, optimize=True, progressive=True)
    print(name, "cover.jpg", out.stat().st_size // 1024, "KB")


# Art Mumbai — navy lock-up, trimmed off its own navy and re-set on the same navy.
NAVY = (37, 38, 86)
art = Image.open(ROOT / "art-mumbai" / "logo.jpg").convert("RGB")
place(trim(art, NAVY), NAVY, "art-mumbai", frac_w=0.52, frac_h=0.62)

# ID Mumbai — white lock-up on near-black. The supplied file also carries a
# hairline frame a shade off the ground, so the mark is found by brightness
# rather than by colour distance, then re-set on the panel colour.
IDBG = (17, 17, 17)
idm = Image.open(ROOT / "id-mumbai" / "logo.jpg").convert("RGB")
# The supplied file has a stray bright 1px rule down its left edge; shave the
# border before measuring, or it sets the bounding box.
idm = idm.crop((3, 3, idm.width - 3, idm.height - 3))
lum = idm.convert("L")
# Alpha straight off brightness: the ground and the hairline frame fall to zero,
# the white artwork stays solid, and the edges keep their antialiasing.
alpha = lum.point(lambda v: 0 if v < 70 else min(255, round((v - 70) * 255 / 130)))
idm_mark = Image.merge("RGBA", (*lum.point(lambda v: 255).split() * 3, alpha))
idm_mark = idm_mark.crop(lum.point(lambda v: 255 if v > 150 else 0).getbbox())
place(idm_mark, IDBG, "id-mumbai", frac_w=0.60, frac_h=0.56)

# ADFF x STIR — vector mark, two white flags with dark lettering, made for a
# dark ground. Render it straight onto the panel colour at full size.
INK = (22, 22, 22)
tmp = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "/tmp") / "stir-mark.png"
cairosvg.svg2png(url=str(ROOT / "stir-adff" / "logo.svg"), write_to=str(tmp), output_width=1600)
place(Image.open(tmp).convert("RGBA"), INK, "stir-adff", frac_w=0.62, frac_h=0.58)
