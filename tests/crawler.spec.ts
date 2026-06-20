import { test, expect } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'http://localhost:3000';

test('Recursive website crawler', async ({ page, context }) => {
  const visited = new Set<string>();
  const toVisit = new Set<string>([baseURL + '/']);
  let hasBrokenLinks = false;

  while (toVisit.size > 0) {
    const currentUrl = Array.from(toVisit)[0];
    toVisit.delete(currentUrl);
    
    // Normalize URL for visited tracking
    const urlObj = new URL(currentUrl);
    const normalizedUrl = urlObj.origin + urlObj.pathname;
    
    if (visited.has(normalizedUrl)) continue;
    visited.add(normalizedUrl);
    
    console.log(`Crawling: ${normalizedUrl}`);
    
    let response;
    try {
      response = await page.goto(normalizedUrl, { waitUntil: 'domcontentloaded' });
    } catch (e) {
      console.error(`Failed to navigate to: ${normalizedUrl}`, e);
      hasBrokenLinks = true;
      continue;
    }
    
    // Check status code
    if (!response || response.status() >= 400) {
      console.error(`Broken link: ${normalizedUrl} returned status ${response?.status()}`);
      hasBrokenLinks = true;
    }

    // Check if the page contains the custom 404 text
    const notFoundText = await page.getByText('Path Not Found').count();
    if (notFoundText > 0) {
      console.error(`Broken link: ${normalizedUrl} rendered 'Path Not Found'`);
      hasBrokenLinks = true;
    }

    // Find all links on this page
    const links = await page.locator('a[href]').all();
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (!href) continue;
      
      try {
        const nextUrl = new URL(href, normalizedUrl);
        // Only crawl our own origin
        if (nextUrl.origin === urlObj.origin) {
            // Strip hash from url
            nextUrl.hash = '';
            if (!visited.has(nextUrl.href)) {
                toVisit.add(nextUrl.href);
            }
        }
      } catch (e) {
        // Invalid URL
      }
    }
  }

  expect(hasBrokenLinks).toBe(false);
});
