import { test, expect } from '@playwright/test';

test.describe('TodoMVC portfolio smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/todomvc');
  });

  test('adds a todo', async ({ page }) => {
    const input = page.getByPlaceholder('What needs to be done?');
    await input.fill('Build my Playwright portfolio');
    await input.press('Enter');

    await expect(page.getByText('Build my Playwright portfolio')).toBeVisible();
  });
});
