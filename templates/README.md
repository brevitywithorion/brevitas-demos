# Brevitas site templates

Eight static, mobile-first pages for Lawrence, KS local businesses. No build step. Shared look: `shared.css`.

| Slug | Industry | Schema.org type |
| --- | --- | --- |
| `restaurant` | Restaurant | Restaurant |
| `home-services` | Home services | HomeAndConstructionBusiness |
| `auto` | Auto repair | AutoRepair |
| `salon-wellness` | Salon / wellness | HealthAndBeautyBusiness |
| `retail` | Retail | Store |
| `professional-services` | Professional services | AccountingService |
| `medical-clinic` | Medical clinic | MedicalClinic |
| `generic-local` | Catch-all | LocalBusiness |

## Preview

From `/workspace/brevitas`:

```
python3 serve.py
```

Then open `http://127.0.0.1:8080/templates/<slug>/` (e.g. `/templates/restaurant/`).

## Swap NAP (name, address, phone)

Keep **one** NAP string and paste it everywhere:

1. Visible header brand, hero NAP, footer, visit block.
2. Click-to-call `href="tel:+17855415500"` (E.164, no spaces). Display **(785) 541-5500**. Do not use 555 numbers.
3. JSON-LD `name`, `telephone`, `address`, `geo`.
4. Open Graph `og:title` / `og:url`.
5. `<title>` and `<h1>` — unique pattern: **{offer} in {city}, {state} | {Business Name}**. Do not duplicate the same title on other pages later.

Placeholders today: **Business Name**, **123 Massachusetts St, Lawrence, KS 66044**, **(785) 541-5500**. These pages are bootstrap/demo — no live domain; site URLs are `#`.

## Google Business Profile (GBP)

- `cid` / maps link: replace `https://maps.google.com/?cid=YOUR_GBP_PLACE_ID`.
- Embed: Google Maps → Share → Embed a map. Drop the iframe into `.map-placeholder`.
- Categories, hours, and service area on the site must match GBP.
- Lawrence metro towns to list when true: Lawrence, Eudora, Baldwin City, Lecompton, and (if you actually serve them) Topeka / KC metro — don’t fake coverage.

## Photos

Create `/photos/` next to each `index.html` or a shared `/photos/` at site root:

- `hero.jpg` / `storefront.jpg` — used in JSON-LD `image` and OG.
- `og.jpg` — 1200×630-ish.
- Team, work, food, or product shots. Compress; no fat galleries.

Replace the gray `.photo` blocks with `<img src="..." width="" height="" alt="...">`.

## Contact (Brevitas)

**Brevitas** is an independent brand (not Precision Mazes). Bootstrap/demo — no domain yet.

- **Contact:** Orion Wills · [orion.wills@gmail.com](mailto:orion.wills@gmail.com)
- **Phone:** (785) 541-5500 (`tel:+17855415500`)
- **Site URL:** `#` until a domain exists


