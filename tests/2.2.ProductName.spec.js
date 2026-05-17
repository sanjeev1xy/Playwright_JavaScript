const {test,expect}=require('@playwright/test');
test('LocateProductName',async({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html");
  

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const products=await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const product of products)
    {
        const productName=await product.textContent();
        console.log(productName);
    }
});