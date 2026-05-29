import { test, expect } from '@playwright/test';

test.describe('smoke', () => {
  test('loads with correct title and hero', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Derek Huynen/);
    await expect(page.locator('h1')).toContainText('Senior AI Engineer');
  });

  test('all sections are present', async ({ page }) => {
    await page.goto('/');
    for (const id of ['about', 'experience', 'projects', 'skills', 'contact']) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test('has no uncaught page errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('theme toggle switches and persists', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    const before = await html.getAttribute('data-theme');
    await page.locator('#theme-toggle').click();
    const after = await html.getAttribute('data-theme');
    expect(after).not.toBe(before);
    await page.reload();
    expect(await html.getAttribute('data-theme')).toBe(after);
  });

  test('external links are safe (rel=noopener, target=_blank)', async ({ page }) => {
    await page.goto('/');
    const externals = page.locator('a[href^="http"]:not([href*="derekhuynen.com"])');
    const count = await externals.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const link = externals.nth(i);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noopener/);
    }
  });

  test('skip link becomes visible on focus', async ({ page }) => {
    await page.goto('/');
    const skip = page.locator('.skip-link');
    await skip.focus();
    await expect(skip).toBeFocused();
  });
});
