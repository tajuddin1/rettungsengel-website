# Rettungsengel website

Static HTML / CSS / JS sales page. Open `index.html` in a browser — no build step.

## How to update (without touching the design)

All everyday changes live in **`js/site-config.js`**.

### Replace product photos
1. Put new files in the matching folder:
   - `images/products/hammer/` (`01.svg` … `04.svg` — replace with `.jpg` / `.png` when new photos are ready)
   - `images/products/pen/` (`01.svg` … `03.svg`)
   - `images/products/saniwerk/` (`01.svg` … `02.svg`)
2. Keep the same filenames **or** add new files and list them in `products.*.images` in `site-config.js`.
   Example after replacing a drawing with a photo:
   `{ src: "images/products/hammer/01.jpg", alt: "Emergency hammer set" }`
3. The Amazon-style thumbnail carousel updates automatically.

Hero image: change `hero.image` in `site-config.js`.

### Amazon links
Edit `amazonUrl` on each product, and `amazonNavUrl` for the top-right button.

The Emergency Pen and Saniwerk links are placeholders (`https://www.amazon.de/`) until you paste the real listing URLs.

### Certificates
Drop official logos into `images/certificates/` and set the `image` path on each item in `certificates.items`. Filenames can be `.png`, `.jpg` or `.svg`.

### Videos (after the trade fair)
In `videos.items`:

```js
{
  enabled: true,
  title: "Firefighter test at the fair",
  youtubeId: "YOUR_YOUTUBE_ID"
}
```

### Remove Saniwerk after the fair
In `products.saniwerk` set `enabled: false`. Rettungsengel stays the only brand on the page.

### Text
Headlines, product copy, benefits, about and contact are all in `site-config.js`. Change `contactEmail` for the mailto link.

## Files

```
index.html          page structure
css/styles.css      design
js/site-config.js   all content (edit this)
js/main.js          carousels and page rendering
images/             photos, logo, certificate marks
```
