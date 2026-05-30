import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

test.describe('accessibility (axe)', () => {
  test('light theme has no WCAG A/AA violations', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light', reducedMotion: 'reduce' });
    await page.goto('/');
    const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
    expect(results.violations).toEqual([]);
  });

  test('dark theme has no WCAG A/AA violations', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
    expect(results.violations).toEqual([]);
  });
});
