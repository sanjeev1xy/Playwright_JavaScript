const { test: base, expect } = require("@playwright/test");

const test = base.extend
({
    homePage: async ({ page }, use) => 
    {
        await page.goto("https://playwright.dev/");
        await use(page);
    }
});
test("Custom Fixture Example", async ({ homePage }) => 
{
    await expect(homePage).toHaveTitle(/Playwright/);
});