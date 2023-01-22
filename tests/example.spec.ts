import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:33333')
})
test('has title', async ({page}) => {
    await expect(page).toHaveTitle(/Hello playwright/);
});

test('text', async ({page}) => {
    expect(await page.textContent('h1')).toBe('Play with playwright');
});
