const{test,expect}=require("@playwright/Test");
//or 
//import{test,expect} from "@playwright/test";

test('IRCT login', async({page})=>
{
await page.goto("https://www.irctc.co.in/nget/train-search")

await page.locator("//input[@role='searchbox']").first().fill("America");

await page.locator("//span[text()=' RAMPUR HAT - RPH ']").click();

await page.locator("//input[@role='searchbox']").nth(1).fill("India");

await page.locator("//li[cpntains(@class,'ng-tns-c68-8)]").click();

await page.locator("//input[contains(@class,'ng-tns-c69-9')]").click();

await page.locator("//div[contains(@class,'ng-tns-c76-10')]").click();

await page.locator("//span[text()='AC First Class (1A) ']").click();

await page.locator("//span[text()='AC First Class (1A) ']").click();
 

await page.locator("//span[text()=' Search Trains ']").click();

});