const { test } = require('@playwright/test');

test('Run different apps in different browsers', async ({ page, browserName }) => {

  if (browserName === 'chromium') 
    {
    console.log('Running on Chrome');
    await page.goto('https://www.google.com');
    }

  if (browserName === 'firefox') 
    {
    console.log('Running on Firefox');
    await page.goto('https://www.facebook.com');
    }

  // wait 20 seconds in BOTH browsers
  await page.waitForTimeout(20000);
});
