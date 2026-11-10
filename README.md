# itspoppadom.github.io

Dominic Cameron's portfolio: school, university, hackathon and personal projects in one place.

Plain HTML, CSS and JavaScript with no build step, served by GitHub Pages.

## Editing content

Everything on the page comes from `data.js`:

- `projects`: one entry per card. Set `private: true` while a repo is private and the card shows "on request" instead of a dead link. Flip it to `false` once the repo is public.
- `journey`, `skills`, `experience`, `links`: the other sections.

Preview locally with any static server, e.g. `python3 -m http.server`, then open http://localhost:8000.

## Publishing

Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
