// import { test, expect, Page, chromium } from "@playwright/test";
// import { getLocator, applocators } from "./locators/subscription.locator.ts";
// import testData from "./data/testData.json";
// import * as helper from "./utils/helper.ts";
// import { ENV } from "./utils/env.ts";
// import { debug, error } from "console";


// test.only("Handle filters", async ({ page, context }) => {
 
//   // Login As admin
//   await page.goto(ENV.baseURL);
 
//   //await page.locator('.product-name').filter({hasText:'Platywright-updae'}).click();
//   //page.locator('.listing-tem').filter({has: page.locator('.sale-price',{hasText:"$120.00"})});
 
 
//   await page.locator('.listing-tem').filter({has: page.locator('.product-name' ,{ hasText:'Denim Skinny Jeans' }),})
 
//   .filter({has: page.locator('.sale-price',{ hasText:"$120.00"})}).click();
 
//   });