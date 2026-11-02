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

## Page structure

Story first, facts last. Each section is a kicker on the left and a headline,
a lede and long paragraphs on the right, followed by a large image or a pair.
No bullet lists in the story; numbers live only in "In brief".

Images live in `assets/img/` and `assets/img/gallery/` and are referenced
directly from `index.html`.

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
