"""
Work grid thumbnails.

The supplied files are reel covers at 9:16. The work grid is 4:5, so each one
needs 30% of its height removed. A plain centre crop cuts the branding off the
top of several of them, so the crop is anchored on the vertical centre of mass
of row-to-row detail — where the type and the subject actually are — and then
clamped so it never runs past the frame.

CLIENTS maps a client slug to the thumbnail prefixes it uses and the upload
ids behind them, in the order the covers were supplied. Add a client by adding
an entry; nothing else changes.
"""
import pathlib
import sys

from PIL import Image

UP = pathlib.Path("/root/.claude/uploads/0a46ebae-4f59-5fbb-970b-48286baedf44")
WORK = pathlib.Path("/home/claude/crypticpeace/aurion1/public/images/work")
W, H = 1080, 1350

CLIENTS = {
    # Multi-brand roster: one prefix per brand, so a new reel lands in the
    # right grid.
    "freelance": {
        "pmb": ["b55aac2a", "22effa69", "56f78783", "fede9141"],
        "maxus": ["8a866b64", "cf2cb5bb", "a2a8eb0f", "bb3a4a48"],
        "cage": ["a4fc7a57", "be761bc6", "b5d43b86", "1b6c268f", "d3511760",
                 "d65b084a", "775bdc30", "296abd17", "b3bb22b6"],
        "astrid": ["f6a6508e", "cb742ce8", "c6f21683"],
        "dinus": ["20701663", "a1416636", "63859769", "fd0ae07a"],
    },
    # Single grid: numbered in the order the posts appear in the client file.
    "nyraj-vasani": {
        "": ["745bb865", "9e83671a", "a7b33b4c", "cfcb9153", "c8a5b8de",
             "4fad280b", "1bd8dabf", "9a4c36dd", "f7ee6d0a", "2dd9f463",
             "454c74c2"],
    },
    # Supplied newest-first as links, but the covers arrived in reverse, so
    # they are listed here already flipped to match the post order in the
    # client file.
    "catch-25": {
        "": ["04143ca5", "da2a7e50", "1de65e6e", "d8c263ba",
             "fffac60d", "0490a08c", "53a1bad5", "fd590921"],
    },
    "tabu": {
        # 01-04 reel covers, 05-09 the posts added later. 05-09 are already
        # 4:5, so crop_45 only resizes them.
        "": ["da2d6454", "9579da42", "a9a9d308", "fe5c852c",
             "dc09d477", "2fb8b84f", "fe45b001", "6794f5d5", "79c6abec"],
    },
    "uws": {
        "": ["912845ef", "fd67ba62", "f2c7654a", "81790ddb", "df8a8ebe",
             "c15ea053"],
    },
    # Links were supplied oldest-first and the covers newest-first, so they
    # are listed here already flipped. The 4:5 posters only get resized.
    "scholar-medico-services": {
        "": ["c5e188ad", "a89aaade", "eac2f5c8", "f7b43ddd", "695188b3",
             "d85843e1", "1b912868", "3a49c611", "d124921d", "23b7f3c1",
             "6c8c5554", "e59dd101"],
    },
    # Links were newest-first; the covers arrived oldest-first, so they are
    # listed here already flipped to match the post order in the client file.
    "maxus-cakes": {
        "": ["c2595d43", "9fafc8a2", "ac7fa0b4", "a0f0c9b2", "af39bd92"],
    },
    # Links newest-first, covers oldest-first; listed here already flipped.
    "5paisa": {
        "": ["c7ace74a", "9ed88f34", "7c9cad41", "6d66fa6a", "2824a893",
             "b3d7c0a4", "e92c64a1", "1e446794", "c6527147", "4c82610f",
             "6590d922", "7f1466c4", "8501ce51", "c3130fc7", "3e2ad5f9",
             "3f5b4f80", "063281b1"],
    },
    "all-things-design": {
        "": ["4d1b1d89", "91b0129a", "9dd0c791", "dd5845a8", "2907095a",
             "93bb8f18"],
    },
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


made = []
for slug, sets in CLIENTS.items():
    out = WORK / slug
    out.mkdir(parents=True, exist_ok=True)
    for prefix, ids in sets.items():
        for i, stem in enumerate(ids, 1):
            name = f"{prefix}-{i:02d}.jpg" if prefix else f"{i:02d}.jpg"
            crop_45(Image.open(UP / f"{stem}-image.jpg").convert("RGB")).save(
                out / name, quality=84, optimize=True, progressive=True)
            made.append((slug, name, (out / name).stat().st_size // 1024))

for slug, name, kb in made:
    print(f"{slug}/{name}  {kb}KB")
print(len(made), "thumbnails")

# Contact sheet so the crops can be checked at a glance.
if len(sys.argv) > 1:
    cols = 5
    rows = (len(made) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * 220, rows * 275), (20, 20, 20))
    for i, (slug, name, _) in enumerate(made):
        t = Image.open(WORK / slug / name).resize((216, 270), Image.LANCZOS)
        sheet.paste(t, ((i % cols) * 220 + 2, (i // cols) * 275 + 2))
    sheet.save(sys.argv[1])
    print("sheet ->", sys.argv[1])
