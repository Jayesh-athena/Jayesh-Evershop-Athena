import { test, expect } from "@playwright/test";
import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env.ts";
import { text } from "stream/consumers";
 
const randomEmail = helper.generateRandomEmail(testData.user.email);
 
  test.only ("User signup and Admin validation", async ({ page }) => {
   
    // Step 1: UAdmin logs in
    await test.step("Navigate to homepage and open signup form", async () => {
      await page.goto(ENV.adminURL);
      await expect(page).toHaveURL(ENV.adminURL); // Assertion
      await expect(page).toHaveURL(ENV.adminURL); // Assertion
      await expect(page.locator("label[for='email']")).toHaveText("Email");
      await expect(page.locator("label[for='password']")).toHaveText("Password");

     });
 
});