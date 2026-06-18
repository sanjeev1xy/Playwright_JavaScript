const {test,expect} =require("@playwright/test");

test("Locating Element ",async({page})=>
{
    const link=await page.$$("a");
    
}
)