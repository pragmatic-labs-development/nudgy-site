# nudgy-site

The marketing one-pager for [Nudgy](https://github.com/pragmatic-labs-development/nudgy) —
a personal CRM that helps you show up for the people you care about.

Astro, no framework, no build-step CSS. It's one page and two legal documents;
anything heavier would be a worse trade.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # builds, then asserts the social image actually exists
npm run check    # astro check
```

Node 22 (`.nvmrc`).

## The domain isn't decided yet

It lives in exactly two places:

- `site` in `astro.config.mjs`, which reads `SITE_URL` and otherwise falls back
  to the GitHub Pages default
- `public/CNAME`, **which does not exist yet**

Everything else derives from `Astro.site`, including canonicals, OG tags and the
sitemap — and that's verified to work on both a root domain and a subpath
deploy. Adopting a domain is: add `CNAME`, set the `SITE_URL` repo variable, add
one DNS record.

## Mistakes carried over from the old site, as fixes

The previous Nudgy marketing site is archived at `~/dev/archive/nudgy-legacy-site`.
It shipped four bugs worth never repeating:

| Old bug | What's here instead |
|---|---|
| `og:image` pointed at a file that never existed, and was root-relative | Generated `og.png`, absolute URL, and `npm run build` **fails** if it's missing |
| Domain hardcoded as a string in two places | Everything derives from `Astro.site` |
| 5.2 MB of unoptimised PNGs served from `public/` | One 4 KB generated PNG and an inline SVG favicon |
| No typecheck, no sitemap, no robots.txt, no 404 | All four, with `astro check` gating deploy |

## Privacy and terms

`src/pages/privacy.astro` is written from `docs/PRIVACY-ARCHITECTURE.md` in the
app repo, which describes what the code actually does.

**Do not let it drift.** The old site claimed Nudgy "runs entirely on your Mac"
and that nothing left the device — true of a local screenshot tool, false the
moment anything synced. Re-read this page whenever the app starts storing
something new. That's a standing item in the app repo's `pineapple` checklist.
