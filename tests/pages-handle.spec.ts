import { test, expect, Page, chromium } from "@playwright/test";
import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env.ts";
import { error } from "console";
 
 
// pass complete browser context - 1 solution{ scalable }
// pass context -solution
// pass nothing -browser (flaky)
 
test("search data ", async ({ page, context }) => {
 
    //Login As admin
    await page.goto(ENV.adminURL);
    await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
    await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
    await getLocator(page, applocators.adminSigninButton).click();
 
    //click on product
    await page.getByRole('link', { name: 'Products', exact: true }).click();
 
    const [page1] = await Promise.all([context.waitForEvent('page'),
    await page.getByRole('link', { name: 'Striped Cotton Sweater'}).click({ button: 'middle' })
    ]);
    await page1.getByRole('textbox', { name: 'Name' }).fill('test');
});

test.only("Handle By Pages and context gracefully", async ({ page, context }) => {
 
  // Login As admin
  await page.goto(ENV.adminURL);
  await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
  await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
  await getLocator(page, applocators.adminSigninButton).click();
  // click on product
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.getByRole('link', { name: 'Striped Cotton Sweater'}).click();
  await page.pause();
  await page.getByLabel ('Disabled').uncheck();
  await page.getByLabel ('Enabled').check();
  await page.getByLabel ('Not visible').uncheck();
  await page.getByLabel ('Visible', {exact: true}).check();
//   await page.getByLabel ('No').nth(0).check();
//   await page.getByLabel ('Yes').nth(1).uncheck();
//   await page.getByLabel ('No').nth(2).check();
//   await page.getByLabel ('Yes').nth(3).uncheck();
  //await page.getByLabel ('attributes[0][value]').selectOption("1");
  await page.getByLabel ('attributes[0][value]').selectOption({label:'Black'});
  //await page.getByLabel ('attributes[0][value]').selectOption({index:2});

  await page.getByLabel ('Size').selectOption("4");
  //await page.getByLabel ('attributes[0][value]').selectOption({label:'XL'});
  //await page.getByLabel ('attributes[0][value]').selectOption({index:2});


  });