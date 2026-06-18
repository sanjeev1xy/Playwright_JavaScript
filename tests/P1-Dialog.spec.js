const { test,expect } = require('@playwright/test');

test('Handle All Dialogs', async ({ page }) => 
{
    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html");

    // Handle Alert Dialog
    page.once('dialog', async dialog => 
    {
        console.log("Alert Message : " + dialog.message());
        await dialog.accept();
    });

    await page.locator("#alertexamples").click();
    await page.waitForTimeout(2000);

    // Handle Confirm Dialog
    page.once('dialog', async dialog => 
    {
        console.log("Alert Message : " + dialog.message());
        //await dialog.accept();                                          // Clicks the OK button. 
          await dialog.dismiss();                                        // if you want Cancel
    });

    await page.locator("#confirmexample").click();
    await page.waitForTimeout(2000);

    // Handle Prompt Dialog
    page.once('dialog', async dialog => 
    {
        console.log("Alert Message : " + dialog.message());
        await dialog.accept("Sanjeev");                                // Enters the text "Sanjeev" into a Prompt dialog and clicks OK.
    });

    await page.locator("#promptexample").click();
    await page.waitForTimeout(3000);

    await page.close();

});
/*
// BeforeUnload Dialog Example
const { test,expect} = require('@playwright/test');

test('Handle BeforeUnload Dialog', async ({ page }) => 
{
    // Open the page
    await page.goto("https://testpages.herokuapp.com/styled/basic-html-form-test.html");

    // Enter some data (simulate unsaved changes)
    await page.locator("textarea[name='comments']").fill("Sanjeev");

    // Handle the BeforeUnload dialog
    page.on('dialog', async dialog => 
    {
        console.log("Dialog Type : " + dialog.type());   // beforeunload
        console.log("Message : " + dialog.message());

        await dialog.dismiss();  // Click Cancel (Stay on page)
        // await dialog.accept(); // Click OK (Leave page)
    });
    await page.waitForTimeout(8000);
    // Trigger the BeforeUnload dialog
    await page.close({ runBeforeUnload: true });
});
*/
