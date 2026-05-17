const{test,expect}=require("@playwright/test");
test("Single File",async({page})=>
{
    await page.goto("https://www.foundit.in/");

    await page.waitForSelector(".mqfihd-upload");

    await page.locator(".mqfihd-upload").click();
    await page.locator("#file-upload").setInputFiles("tests\UploadFiles\Resume.docx.pdf");

    await page.waitForTimeout(5000);
});

test.only("Multiple Files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page.locator("#filesToUpload").setInputFiles([
    "tests/UploadFiles/Resume.docx.pdf",
    "tests/UploadFiles/Sanjeev_Resume.docx.pdf"
  ]);

  await page.waitForTimeout(3000);

  await expect(page.locator("#fileList li:nth-child(1)")).toHaveText("Resume.docx.pdf");
  await expect(page.locator("#fileList li:nth-child(2)")).toHaveText("Sanjeev_Resume.docx.pdf");

  await page.waitForTimeout(3000);

  // Removing files
  await page.locator("#filesToUpload").setInputFiles([]);
  await page.waitForTimeout(3000);

  await expect(page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected");
  await page.waitForTimeout(3000);
});

