const{test,expect}=require("@playwright/test");
test("Mouse Right Click",async({page})=>
{
    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
    const button=await page.locator("//span[@class='context-menu-one btn btn-neutral']");

    //right click action
    await page.locator({button:'right'}).click();

    await page.waitForTimeout(5000);
}
)