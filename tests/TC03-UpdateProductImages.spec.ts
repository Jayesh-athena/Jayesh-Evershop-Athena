import { test, expect } from "@playwright/test";
import testData from "./data/testData.json";
import { ENV } from "./utils/env";
import { Adminpage } from "../pages/AdminPage";
import { ProductPage } from "../pages/ProductPage";

test("TC03-Update product images", async ({ page }) => {
  const admin = new Adminpage(page);
  const product = new ProductPage(page);

  await admin.navigate(ENV.adminURL);
  await admin.loginAdmin(testData.admin.email, testData.admin.password);
  const productName = "Updated product G"; // product created by TC01
  // Update images - use explicit local image file specified by the user
  const imagePath = "C:\\Playwright - Jayesh\\tests\\file upload\\sport_car_2.jpg";
  await product.updateProductImages(productName, imagePath);

  // Verify product row is still visible in the products list
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  const row = page.locator('tr', { hasText: productName });
  await expect(row).toBeVisible();
});
