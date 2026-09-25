/**
 * Assert the OG image actually exists in the build output.
 *
 * The old Nudgy site referenced /assets/og-image.png for months. The file never
 * existed, so every page emitted a broken social card and nobody noticed,
 * because nothing checks a URL that only a scraper ever fetches.
 *
 * This is four lines and it makes that failure impossible to ship again.
 */
import { existsSync } from 'node:fs';

const required = ['dist/og.png', 'dist/favicon.svg', 'dist/robots.txt', 'dist/sitemap-index.xml'];
const missing = required.filter((f) => !existsSync(f));

if (missing.length) {
  console.error(`\nBuild is missing required files:\n  ${missing.join('\n  ')}\n`);
  process.exit(1);
}
console.log('OK: og.png, favicon, robots.txt and sitemap are all present.');
