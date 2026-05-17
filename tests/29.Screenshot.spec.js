//const {test,expect}=require("@playwright/test");
import {test,expect} from "@playwright/test";

test("Page Screenshot",async({page})=>
{
await page.goto("https://www.demoblaze.com/index.html");
await page.screenshot({ path:"tests/Screenshots/"+Date.now()+"HomePage.png"});
});

test("Full page Screenshot",async({page})=>
{
await page.goto("https://www.demoblaze.com/index.html");
await page.screenshot({ path:"tests/Screenshots/"+Date.now()+"FullPage.png",fullPage:true});
});

test.only("Element Ecreenshot",async({page})=>
{
await page.goto("https://www.demoblaze.com/index.html");
await page.locator("//div[@id='tbodyid']//div[1]//div[1]//a[1]//img[1]").screenshot({ path:"tests/Screenshots/"+Date.now()+"Samsung.png"});
});