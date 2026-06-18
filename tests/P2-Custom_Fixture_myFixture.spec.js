//Step 1: Create the Fixture File

const base = require('@playwright/test');

const test = base.test.extend({

    homePage: async ({ page }, use) =>
    {
        await page.goto('https://playwright.dev/');
        await use(page);
    }
});

//Step 2: Create the Test File

const expect = base.expect;

test('Custom Fixture Example', async ({ homePage }) => 
{
    await expect(homePage).toHaveTitle(/Playwright/);
    console.log("Custom Fixture Working Successfully");
});