const {test,expect}=require("@playwright/test");
test("Handle checkboxes",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //single checkbox
    await page.locator("//input[@id='monday']").check();
    //await page.check("//input[@id='monday']");

    expect(await page.locator("//input[@id='monday']")).toBeChecked();
    expect(await page.locator("//input[@id='monday']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@id='sunday']").isChecked()).toBeFalsy();

    //Multiple checkbox
    const checkboxLocators=[
        "//input[@id='monday']",
        "//input[@id='sunday']",
        "//input[@id='saturday']"
    ];

    for(const locator of checkboxLocators) // select multiple checkboxs
    {
        await page.locator(locator).check();
    }

    await page.waitForTimeout(5000);

    for(const locator of checkboxLocators) // unselect multiple checkboxs which are alredy selected
    {
        if(await page.locator(locator).isChecked())
        {
        await page.locator(locator).uncheck();
        }
    }


    await page.waitForTimeout(5000);
});