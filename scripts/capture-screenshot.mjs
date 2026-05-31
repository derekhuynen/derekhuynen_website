// Captures the README hero screenshot of the live site in dark theme.
// Uses the Playwright already installed under frontend/node_modules.
//
// Usage:
//   node scripts/capture-screenshot.mjs            # shoots https://derekhuynen.com
//   SITE_URL=http://localhost:4173 node scripts/capture-screenshot.mjs
// Output:
//   docs/images/site.png

import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const require = createRequire(resolve(root, 'frontend/package.json'));
const { chromium } = require('playwright');

const url = process.env.SITE_URL || 'https://derekhuynen.com';
const outDir = resolve(root, 'docs/images');
const outPng = resolve(outDir, 'site.png');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: 'dark',
});
const page = await ctx.newPage();
console.log('Opening', url);
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
await page.waitForTimeout(1200); // let fonts + reveal animations settle
await page.screenshot({ path: outPng, animations: 'disabled' });
await browser.close();
console.log('Wrote', outPng);
