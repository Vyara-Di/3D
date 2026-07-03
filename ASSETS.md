# Asset Manifest — Images & Videos

Human-readable checklist of every image and video `index.html` expects.
Machine-readable version: [`assets.manifest.json`](./assets.manifest.json) — the two
are generated from the same source and should always match.

All paths are relative to the site root (where `index.html` lives).

---

## Site-level assets

| Asset | Path | Notes |
| --- | --- | --- |
| Favicon | `images/fav-icon.png` | PNG, any square size (32×32 or larger) |
| OG / social preview | `images/og-preview.jpg` | Recommended 1200x630 |
| Studio portrait | `images/main/studio-portrait.jpg` | Used in the About section |
| 3D hero model | `sculpture.glb` | Loaded relative to site root, not from /images. Requires HTTP(S), not file://. |

---

## Project assets

Each project reads from `images/{slug}/`. `card.jpg` is the only file also used on the
homepage grid — everything else loads inside that project's case-study overlay.

### LG Electronics — `images/lg-electronics/`

> This is the only project that uses video. `bento-1/2/3` here are `.mp4`, unlike every other project where those same names are `.jpg`.

| File | Type |
| --- | --- |
| `hero.jpg` | Image |
| `gallery-1.jpg` | Image |
| `gallery-2.jpg` | Image |
| `parallax.jpg` | Image |
| `outcome-1.jpg` | Image |
| `outcome-2.jpg` | Image |
| `outcome-3.jpg` | Image |
| `reflection.jpg` | Image |
| `card.jpg` | Card thumbnail (homepage grid) |
| `reel.mp4` | Video (autoplay, muted, looped) |
| `bento-1.mp4` | Video (autoplay, muted, looped) |
| `bento-2.mp4` | Video (autoplay, muted, looped) |
| `bento-3.mp4` | Video (autoplay, muted, looped) |

### My Market — `images/my-market/`

| File | Type |
| --- | --- |
| `hero.jpg` | Image |
| `parallax.jpg` | Image |
| `bento-1.jpg` | Image |
| `bento-2.jpg` | Image |
| `bento-3.jpg` | Image |
| `challenge.jpg` | Image |
| `approach-1.jpg` | Image |
| `approach-2.jpg` | Image |
| `approach-3.jpg` | Image |
| `approach-4.jpg` | Image |
| `bento-extra-1.jpg` | Image |
| `bento-extra-2.jpg` | Image |
| `bento-extra-3.jpg` | Image |
| `reflection-1.jpg` | Image |
| `card.jpg` | Card thumbnail (homepage grid) |

### Smart Point — `images/smart-point/`

| File | Type |
| --- | --- |
| `hero.jpg` | Image |
| `outcome-1.jpg` | Image |
| `bento-1.jpg` | Image |
| `bento-2.jpg` | Image |
| `bento-3.jpg` | Image |
| `approach-1.jpg` | Image |
| `approach-2.jpg` | Image |
| `approach-3.jpg` | Image |
| `card.jpg` | Card thumbnail (homepage grid) |

### Reverto Winery — `images/reverto-winery/`

| File | Type |
| --- | --- |
| `hero.jpg` | Image |
| `bento-1.jpg` | Image |
| `bento-2.jpg` | Image |
| `bento-3.jpg` | Image |
| `gallery-1.jpg` | Image |
| `gallery-2.jpg` | Image |
| `outcome-1.jpg` | Image |
| `outcome-2.jpg` | Image |
| `parallax.jpg` | Image |
| `challenge.jpg` | Image |
| `reflection.jpg` | Image |
| `card.jpg` | Card thumbnail (homepage grid) |

### Crea Bakery — `images/crea-bakery/`

| File | Type |
| --- | --- |
| `hero.jpg` | Image |
| `bento-1.jpg` | Image |
| `bento-2.jpg` | Image |
| `bento-3.jpg` | Image |
| `challenge.jpg` | Image |
| `gallery-1.jpg` | Image |
| `outcome-1.jpg` | Image |
| `outcome-2.jpg` | Image |
| `gallery-2.jpg` | Image |
| `card.jpg` | Card thumbnail (homepage grid) |

### Maynooth Furniture — `images/maynooth-furniture/`

| File | Type |
| --- | --- |
| `hero.jpg` | Image |
| `bento-1.jpg` | Image |
| `bento-2.jpg` | Image |
| `bento-3.jpg` | Image |
| `parallax.jpg` | Image |
| `gallery-1.jpg` | Image |
| `gallery-2.jpg` | Image |
| `outcome-1.jpg` | Image |
| `outcome-2.jpg` | Image |
| `outcome-3.jpg` | Image |
| `mockup.jpg` | Image |
| `card.jpg` | Card thumbnail (homepage grid) |

---

## Totals

- **67** project images
- **4** project videos (LG Electronics only)
- **4** site-level assets (favicon, OG preview, studio portrait, 3D model)

---

## Notes

- Filenames are resolved from the project's slug, not from any field in the projData JSON block — see projImg()/projVid() in index.html.
- The legacy 'seed' and 'imgs' fields once present in projData are unused and have been removed from the shipped data.
- Only LG Electronics ships video; every other project's bento-1/2/3 are .jpg, not .mp4.
- 'card.jpg' is the only asset used on the homepage grid; every other file is only loaded inside that project's case-study overlay.
