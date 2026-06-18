//const {test,expect}=require('@playwright/test');
import {test,expect} from '@playwright/test';
test('Locator',async({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("id=login2").click()

    await page.locator("#loginusername").fill("Sanjeev@");
    await page.locator("input[id='loginpassword']").fill("SANgita@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    const logoutlink=await page.locator("//a[normalize-space()='Log out']");

    await expect (logoutlink).toBeVisible();

    await page.close();
});