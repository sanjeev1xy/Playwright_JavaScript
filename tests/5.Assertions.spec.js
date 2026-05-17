const {test,expect}=require('@playwright/test');
test('AssertionTest',async({page})=>
{
    await page.goto("https://demo.nopcommerce.com/register");

    //1).await expect(page).toHaveURL()	         Page has a URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    //2).await expect(page).toHaveTitle()	         Page has a title
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    //3).await expect(locator).toBeVisible()	         Element is visible
    const logoElement=await page.locator(".header-logo");
    await expect(logoElement).toBeVisible();

    //4).await expect(locator).toBeEnabled()	         control/Element is enabled
    const searchStoreBox=await page.locator("#small-searchterms");
    await expect(searchStoreBox).toBeEnabled();

   //6).await expect(locator).toBeChecked()	         Radio/Checkbox is checked
   //radio button
   const maleRadioButton=await page.locator("#gender-male");
   await maleRadioButton.click();
   await expect(maleRadioButton).toBeChecked();

   //check box
   const newsletterCheckbox=await page.locator("#Newsletter");
   await expect(newsletterCheckbox).toBeChecked();

   //7).await expect(locator).toHaveAttribute()       Element has a DOM attribute
   const regButton=await page.locator("#register-button");
   await expect(regButton).toHaveAttribute("type","submit");

   //8).await expect(locator).toHaveText()	         Element matches text
    await expect(await page.locator(".page-title h1")).toHaveText("Register"); //full text

  //9).await expect(locator).toContainText()         Element contains text
  await expect(await page.locator(".page-title h1")).toContainText("Reg"); //partial text

  //10).await expect(locator).toHaveValue(value)     Input has a value
  const emailInput=await page.locator("#Email");
  await emailInput.fill("test@demo.com");
  await expect(emailInput).toHaveValue("test@demo.com");

  //11).await expect(locator).toHaveCount()          List of elements has given length
  const options=await page.locator("select[name='DateOfBirthMonth'] option");
  await expect(options).toHaveCount(0);


});