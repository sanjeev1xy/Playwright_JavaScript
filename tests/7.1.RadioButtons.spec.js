const {test,expect}=require('@playwright/test');
test("Handle Inputbox",async({page})=>
{
    //await page.goto("https://itera-qa.azurewebsites.net/home/automation");
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Radio button
    await page.locator("//input[@id='male']").check(); //male
    //await page.check("//input[@id='male']");
    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy(); //male
    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy(); //female 

    await page.waitForTimeout(5000); //pausing code


});