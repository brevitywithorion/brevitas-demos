# brevitas-demos

Live: https://brevitas.pages.dev

Source for Brevitas, a small studio I run that builds one-page websites and Google Business Profile setup for trades and local businesses in Lawrence, KS. Demo sites show an owner their own business online before they pay anything.

## What is here

- `index.html`, `work.html`, `templates.html`: the Brevitas site, the build process page, and the template gallery
- `templates/`: sample one-page sites for fictional Lawrence businesses (home services, auto, restaurant, retail, salon, clinic, professional services, generic local)
- `aqua-flow/`, `specialized-electric/`: demo pages prepared for specific shops
- `art/`: shared images

Demo and template paths are served with `X-Robots-Tag: noindex, nofollow` (see `_headers`).

## Tech

- Static HTML, CSS, and a little JavaScript, no build step
- Hosted on Cloudflare Pages (`_headers` and `_redirects` for headers and redirects)
