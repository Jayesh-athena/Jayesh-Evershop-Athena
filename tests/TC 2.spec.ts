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
 
    });
 
    // Step 4: Adding new product
  await page.getByRole('link', { name: 'New Product' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill(testData["product data"].Name);
  await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('Jayesh Dhangar');
  await page.getByRole('textbox', { name: 'SKU' }).fill(testData["product data"].SKU);
  await page.getByRole('textbox', { name: 'Price' }).fill(testData["product data"].Price);
  await page.getByRole('textbox', { name: 'Weight' }).fill(testData["product data"].Weight);
  await page.locator('#urlKey').fill('ABC');
  await page.locator('#metaTitle').fill('Data');
  await page.locator('#metaKeywords').fill('Data');
  await page.getByRole('textbox', { name: 'Meta description' }).fill('PQR');
  
  await page.getByLabel ('Disabled').uncheck();
  await page.getByLabel ('Enabled').check();
  await page.getByLabel ('Not visible').uncheck();
  await page.getByLabel ('Visible', {exact: true}).check();
  await page.getByRole('textbox', { name: 'Quantity' }).fill('20');
  await expect(page.getByRole('textbox', { name: 'Quantity' })).toHaveValue('20');
  await page.locator ("select[id='attributes[0][value]']").selectOption ('1');
  await page.locator ("select[id='attributes[1][value]']").selectOption ('4');
  await page.getByRole('button', { name: 'Save' }).click();
           
 
    });
  });
 