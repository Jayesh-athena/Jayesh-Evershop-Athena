import { test, expect, Page, chromium } from "@playwright/test";
import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env.ts";
import { error } from "console";

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
  await page.locator ("select[id='attributes[0][value]']").selectOption ('1');
  //await page.locator ("select[id='attributes[0][value]']").selectOption ({label:'Black'});
  //await page.locator ("select[id='attributes[0][value]']").selectOption ({index:2});

  await page.locator ("select[id='attributes[1][value]']").selectOption ('4');
  //await page.locator ("select[id='attributes[1][value]']").selectOption ({label:'XL'});
  //await page.locator ("select[id='attributes[1][value]']").selectOption ({index:2});
  
  //await page.locator('#attributes\\[0\\]\\[value\\]').selectOption('1');
  //await page.locator('#attributes\\[0\\]\\[value\\]').selectOption ({label:'Black'});
  //await page.locator('#attributes\\[0\\]\\[value\\]').selectOption ({index:2});

  //await page.locator('#attributes\\[0\\]\\[value\\]').selectOption('4');
  //await page.locator('#attributes\\[1\\]\\[value\\]').selectOption ({label:'XL'});
  //await page.locator('#attributes\\[1\\]\\[value\\]').selectOption ({index:2});


  });