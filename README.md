# Maison De Visage — website

A bilingual (English / العربية) single-page website for **Maison De Visage**, a dentistry, skin care, dermatology and facial aesthetics clinic in Ain Mreisse, Beirut.

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

The look is set by `theme`: `"sage"` (current), `"sea"` or `"classic"`. Add `?theme=sea` to the URL to try one without changing the file.

- If `whatsapp` is set, the booking form sends the request as a WhatsApp message and a WhatsApp button appears.
- Otherwise, if `email` is set, it opens an email.
- Otherwise it copies the request and opens Instagram so the client can message you there.

## 2. Photos

The clinic photo is `assets/clinic.jpg` (with a smaller `assets/clinic.webp`). To change it, replace both files and keep the same names.

## 3. Edit services and team

Services and doctors are in `index.html` (English) and `script.js` (Arabic, keys `s1.title` … `s6.text` and `team.*`).
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
