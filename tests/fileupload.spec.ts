import { test, expect, Page } from "@playwright/test";
import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env.ts";
import { error } from "console";
import path from "path/posix";

test.only("Upload the image", async ({ page, context }) => {
 
  // Login As admin
  await page.goto(ENV.adminURL);
  await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
  await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
  await getLocator(page, applocators.adminSigninButton).click();
  // click on product
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.getByRole('link', {name: 'New Product'}).nth(1).click();
  const fileinput = page.locator('#images input[type="file"]');
  await fileinput.setInputFiles(ENV.systempath);
 
  
 
  
});