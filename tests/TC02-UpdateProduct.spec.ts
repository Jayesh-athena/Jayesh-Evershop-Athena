import { test, expect } from "@playwright/test";
import testData from "./data/testData.json";
import { ENV } from "./utils/env";
import { Adminpage } from "../pages/AdminPage";
import { ProductPage } from "../pages/ProductPage";

test("TC02-Update product name", async ({ page }) => {
  const admin = new Adminpage(page);
  const product = new ProductPage(page);

  await admin.navigate(ENV.adminURL);
  await admin.loginAdmin(testData.admin.email, testData.admin.password);

  const oldName = "New product G";
  const newName = "Updated product G";

  await product.newProductName(oldName, newName);
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  const updatedRow = page.locator('tr', { hasText: newName });
  await expect(updatedRow).toBeVisible();
});
