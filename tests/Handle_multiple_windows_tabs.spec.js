
/*👉 Root Cause
In Playwright JavaScript, page.waitForPopup() does NOT exist.

That API exists in Java Playwright, not in JavaScript/TypeScript.
*/

const { test } = require('@playwright/test');
test('Handle multiple windows', async ({ page }) => 
  {
  await page.goto('https://the-internet.herokuapp.com/windows');
  await page.waitForTimeout(5000);
  const [newPage] = await Promise.all
  ([
  page.waitForEvent('popup'),
  page.click('a[href="/windows/new"]')
  ]);
  await newPage.waitForLoadState();
  console.log(await newPage.title());
  await page.bringToFront(); // back to parent window
});
