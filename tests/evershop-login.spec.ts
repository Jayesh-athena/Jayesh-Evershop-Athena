import { test, expect } from "@playwright/test";
import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env.ts";
 
const randomEmail = helper.generateRandomEmail(testData.user.email);
 
test.describe("Subscription Flow", () => {
  test("User signup and Admin validation", async ({ page }) => {
    
    // Step 1: User navigates to homepage
      await test.step("Navigate to homepage and open signup form", async () => {
      await page.goto(ENV.baseURL);
      await getLocator(page, applocators.navSignup).nth(1).click();
      await expect(getLocator(page, applocators.linkCreateAccount)).toBeEnabled();
      await getLocator(page, applocators.linkCreateAccount).click();
      
    });
 
    // Step 2: User signs up
    await test.step("Fill signup form and register", async () => {
      await expect(page).toHaveURL(ENV.baseURL + "/account/register");
      await getLocator(page, applocators.fullNameInput).fill(testData.user.name);
      await getLocator(page, applocators.emailInput).fill(randomEmail);
      await getLocator(page, applocators.passwordInput).fill(testData.user.password);
      await getLocator(page, applocators.signupButton).click();
      await expect(page).toHaveURL(ENV.baseURL); // Assertion
    });
 
    // Step 3: Admin logs in
    await test.step("Login as Admin", async () => {
      await page.goto(ENV.adminURL);
      await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
      await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
      await getLocator(page, applocators.adminSigninButton).click();
 
      await expect(getLocator(page, applocators.customersLink)).toBeVisible();
      await expect(getLocator(page, applocators.Productlink)).toBeVisible();
     
      await expect(page).toHaveURL(ENV.baseURL + "/admin");
    });
 
    // Step 4: Admin verifies new user
    await test.step("Verify new user in Customers list", async () => {
      await getLocator(page, applocators.customersLink).click();
            const emailCell = getLocator(page, applocators.dynamicCustomerEmailCell(randomEmail));
      await expect(emailCell).toBeVisible();
      await helper.findRecordAndClick(page, randomEmail);
 
    });
  });
});
 