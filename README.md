# Maison De Visage — website

A bilingual (English / العربية) single-page website for **Maison De Visage**, a facial & skincare studio.

- Instagram: https://www.instagram.com/explore/locations/101715265679227/maison-de-visage/
- Facebook: https://www.facebook.com/p/Maison-De-Visage-61550584058348/

Plain HTML, CSS and JavaScript — no build step, nothing to install.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page content (English text lives here) |
| `script.js` | Arabic translations, language switch, menu, booking form |
| `styles.css` | Design (colours are at the top under `:root`) |
| `config.js` | **Your business details — edit this first** |
| `assets/` | Logo and images |

## 1. Add your details

Open `config.js` and fill in your phone, WhatsApp number, email, address and opening hours.
Anything left empty is hidden on the page.

- If `whatsapp` is set, the booking form sends the request as a WhatsApp message and a WhatsApp button appears.
- Otherwise, if `email` is set, it opens an email.
- Otherwise it copies the request and opens Instagram so the client can message you there.

## 2. Add your photos

Put photos in `assets/gallery/` and replace the empty tiles in the **Gallery** section of `index.html`, for example:

```html
<div class="tile tile-1 reveal"><img src="assets/gallery/1.jpg" alt="Facial treatment"></div>
```

## 3. Edit services

The six services are in `index.html` (English) and `script.js` (keys `s1.title` … `s6.text`, Arabic).
Change the English and Arabic text together.

## Preview locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Add `?lang=ar` to the URL to open the Arabic version directly.

## Publish for free (GitHub Pages)

1. Merge this branch into `main`.
2. On GitHub, go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Your site will be live at `https://<your-username>.github.io/maison/`. You can attach a custom domain on the same page.
