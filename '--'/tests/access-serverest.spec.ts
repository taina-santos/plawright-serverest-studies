import { test, expect } from '@playwright/test';

test('Open ServeRest page', async ({ page }) => {
    await page.goto('https://front.serverest.dev/login');
    
    await expect(page.locator('form')).toBeVisible();
});