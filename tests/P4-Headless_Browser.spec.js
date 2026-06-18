// 1. for headless mode playwright.config.js headless:true 
// 2. for headed mode playwright.config.js headless:false 
//and command is in terminal npx playwright test Headless_Browser.spec.js


const {test,expect} =require('@playwright/test');
//import {test,expect} from '@playwright/test';
test('Home Page',async({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html");
    await page.waitForTimeout(5000); //pausing code
    const pageTitle=await page.title();
    console.log("Page title is:",pageTitle);
    await expect(page).toHaveTitle("STORE");
    const pageURL=page.url();
    console.log("Page URL is:",pageURL);
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await page.close();


})