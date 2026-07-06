# Visit Loudoun — Partner Portal

An interactive, partner-facing site that shows Loudoun businesses **why** to tag and share with Visit Loudoun, **what** the destination does for them, and **how** to do it. Built as a static site so it can be hosted free on GitHub Pages, and refreshed every quarter with the latest numbers.

**🔗 Live site:** _add your GitHub Pages URL here once deployed (e.g. https://your-username.github.io/visit-loudoun-partner-portal/)_

### What partners see

- **Dashboard** — Social Reach and Website Reach at a glance, follower-growth and traffic charts, and top-performing posts by platform.
- **Why It Matters** — the case for tagging: reach beyond your own followers, a real partner-collab example, who the Loudoun visitor is, and our search footprint.
- **How to Market With Us** — the tag-in-the-post rule, a simple step-by-step, and where to send photos, updates and (soon) Extranet listings.
- **Partner Toolkit** — handles to copy, do's and don'ts, content ideas, the official 2026 Partner Toolkit PDF, and contacts.

Data covers social (Meta + TikTok), the website (GA4) and the 2026 Visitor Profile study.

---

## What's in this folder

| File | What it is | Do you edit it? |
|------|------------|-----------------|
| `index.html` | Page structure and editorial copy | Rarely |
| `styles.css` | All styling (brand colors, fonts, layout) | Rarely |
| `app.js` | Renders the data, charts and interactivity | No |
| **`data.js`** | **Every number on the site** | **Yes — this is the only file you update each quarter** |
| `assets/` | Logo (`logo/`) and any photos (`photos/`) | Drop files in |
| `README.md` | This guide | — |

---

## Updating the numbers each quarter

The portal refreshes every quarter, starting with the new fiscal year on **July 1**.

1. Pull your latest in-app analytics (Meta Business Suite for Facebook/Instagram/Threads, TikTok analytics, GA4 for the website).
2. Open **`data.js`**.
3. Update the values in each labeled section — follower counts, top posts, audience splits, website and search numbers.
4. Update the reporting window at the top:
   ```js
   meta: {
     quarterLabel: "Q1 · FY2027",
     reportWindowLabel: "June 24 – September 22, 2026",
     dataThrough: "September 22, 2026",
     nextUpdate: "October 1, 2026",
     ...
   }
   ```
5. Save, then commit and push (see deploy steps). The site updates itself — you never touch the HTML, CSS or JavaScript.

> Tip: keep last quarter's numbers in a comment if you want a quick before/after.

---

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `partner-portal`).
2. Upload everything in this folder to the repo (or `git push` it).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
5. After a minute, your site is live at `https://<your-username>.github.io/partner-portal/`.

To update later: edit `data.js`, commit, push. GitHub Pages redeploys automatically.

---

## Swapping in the logo and photos

All images live inside `partner-portal/assets/` so they deploy with the site (a folder *outside* `partner-portal/` would not be served by GitHub Pages).

- **Logo:** Drop `visit-loudoun-logo.png` into `assets/logo/`. It appears in the header automatically — no code change needed. Add `visit-loudoun-logo-white.png` (white knockout) for the footer. If a file is missing, the site falls back to a styled "VL" text mark, so it never looks broken. See `assets/logo/README-LOGO.md`.
- **Photos:** Drop images into `assets/photos/` and tell Claude where each should go (hero background, a "content we love" gallery in the Partner Toolkit, or section accents). See `assets/photos/README-PHOTOS.md` for naming and size guidance.

---

## The contact / submission setup

- The **"Email an update"** and **"Share your photos"** buttons open a pre-filled email to `mirabal@visitloudoun.org` and `grooms@visitloudoun.org`. Change the recipients in `data.js → contacts`.
- The **Extranet** card on *How to Market With Us* is intentionally marked **Coming soon**. When the Extranet guide is ready, update that card in `index.html` (search for `Coming soon`).

---

## Later: automating the Meta pull safely (optional)

GitHub Pages is a **public** host, so you must **never put a Meta access token in the code** — anyone could read it. The safe way to automate is **GitHub Actions with an encrypted secret**:

1. Store a long-lived Meta token as a repo **Secret** (Settings → Secrets and variables → Actions). It is encrypted and never visible in the code.
2. Add a scheduled workflow (`.github/workflows/refresh.yml`) that runs quarterly (cron), calls the Meta Graph API using the secret, writes the results into `data.js`, and commits the change.
3. The site stays 100% static — it just reads the refreshed `data.js`.

This keeps the token hidden while making the quarterly refresh automatic. Until then, the manual update above takes about five minutes.

> Note: Meta's Graph API for page/IG insights requires a connected Business account, app review for some metrics, and long-lived tokens that expire roughly every 60 days and need refreshing — which is why a once-a-quarter manual paste is often the simpler choice.

---

## Notes

- Charts use [Chart.js](https://www.chartjs.org/) loaded from a CDN — no install needed; it works as long as the page has internet.
- Fonts: **Lora** (brand serif) and **Inter** (a close, free stand-in for Acumin Pro; the brand's listed web fallback is Arial).
- Colors and type follow the Visit Loudoun brand guidelines.
