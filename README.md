# bayousound3361.com

One-page site for 3361 Bayou Sound, Gallery Point Work No. 003.
Static HTML for GitHub Pages, no build step.

## Structure

```
index.html                 the page
404.html                   not found page
CNAME                      bayousound3361.com
og.jpg                     share image 1200×630
assets/css/gp-project.css  shared Gallery Point project template
assets/js/site.js          mobile menu and viewing form
assets/fonts/              Larken (self hosted)
assets/img/                hero, sketch, facade
assets/img/gallery/        gallery photos (see names below)
assets/img/plans/          level-1.png, level-2.png, level-3.png
```

## Adding photos

Drop files into `assets/img/gallery/` with exactly these names. An empty slot shows its label until the file exists.

| File | Slot |
|---|---|
| 01-living.jpg | full width |
| 02-kitchen.jpg, 03-dining.jpg | pair |
| 04-pool.jpg | full width (in place) |
| 05-primary-suite.jpg, 06-primary-bath.jpg | pair |
| 07-terrace-sunset.jpg | full width |
| 08-bedroom-2.jpg, 09-bedroom-3.jpg | pair |
| 11-water-side.jpg (in place), 10-dock.jpg | pair |
| 12-drone.jpg | full width |
| 13-bedroom-4.jpg, 14-facade-dusk.jpg | pair |

Export at 2400 px on the long side, JPG quality around 82, under 500 KB each.
Floor plans go to `assets/img/plans/level-1.png` … `level-3.png`.

## Still to fill

* Room lists per level in `index.html`, marked `[ROOMS FROM MODEL]`.
* Drive times in Location are approximate, check them once.

## Form

Sends through FormSubmit to snehota@gallerypoint.cz. The first submission
triggers an activation email from FormSubmit to that address; click the link
once and the form is live.

## Deploy (GitHub Pages)

1. New repository, e.g. `davidsiwy/bayousound3361`, push these files to `main`.
2. Settings › Pages › Deploy from branch › `main` / root.
3. Custom domain `bayousound3361.com`, then Enforce HTTPS.
4. DNS at Active24:
   * A records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   * CNAME `www` → `davidsiwy.github.io`

## Next project from this template

Copy the repository, change `--acc` on `<html>`, the content, `CNAME`, meta
tags and JSON-LD. Leave `gp-project.css` and the "A Gallery Point work" block
unchanged so every project site stays one brand.
