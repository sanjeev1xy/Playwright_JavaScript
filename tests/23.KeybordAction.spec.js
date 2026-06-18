const {test,expect}=require("@playwright/test");
test("Keybord Actions",async({page})=>
{
    await page.goto("https://gotranscript.com/text-compare");

      await page.locator("[name='text1']").fill("welcome to automation");

      //Ctrl + A - select the text
      await page.keyboard.press("ControlOrMeta+A");

      //Ctrl + C - copy the text
      await page.keyboard.press("ControlOrMeta+C");
      
      //Tab
      await page.keyboard.down("Tab");
      await page.keyboard.up("Tab");

      //Ctrl + V - paste the text
      await page.keyboard.press("ControlOrMeta+V");

      await page.waitForTimeout(5000);


}
)