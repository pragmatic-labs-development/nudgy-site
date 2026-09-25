// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * The domain is deliberately not decided yet.
 *
 * It lives in exactly two places — `site` below, and `public/CNAME`, which does
 * not exist until there is a domain. Everything else derives its URLs from
 * `Astro.site`, so adopting a domain later is one env var plus one file plus one
 * DNS record.
 *
 * The old Nudgy site hardcoded `https://get-nudged.online` in two places inside
 * Base.astro, which is precisely what made "we'll decide the domain later"
 * expensive last time.
 */
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://pragmatic-labs-development.github.io/nudgy-site',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Trailing-slash-free URLs, so /privacy doesn't 301 to /privacy/.
    format: 'file',
  },
});
