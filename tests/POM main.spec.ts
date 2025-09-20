//pomdemospec
import { test } from "@playwright/test";
import testData from "./data/testData.json";
import { ENV } from "./utils/env";
import { generateRandomEmail } from "./utils/helper";
import{ SignupPage } from "../pages/SignupPage";
import{ Adminpage } from "../pages/AdminPage";
import {CouponPage } from "../pages/CoupanPage"
import { ProductPage } from "../pages/ProductPage";
import { BasePages } from "../pages/BasePage";

test.describe("Subscription Flow POM Demo", () => {
 
  test("Step 1-Signup process", async ({ page }) => {
    const signupPage=new SignupPage(page);
    const randomEmail=generateRandomEmail(testData.user.email);
 
   //Test steps:
    await signupPage.navigate(ENV.baseURL);
    await signupPage.openNewCustomerForm();
    await signupPage.registerNewUser(testData.user.name,randomEmail,testData.user.password);
  });
 
  });
 
    test("step 2-Login as Admin", async ({page}) => {
    const adminpage=new Adminpage (page);
    await adminpage.navigate(ENV.adminURL);
    await adminpage.loginAdmin(testData.admin.email,testData.admin.password);
 
  });

  test ("step 3-New coupon create form", async({page})=>{
  const coupon=new CouponPage (page);
  const adminpage=new Adminpage (page);
  const discountTypeRadio= page.locator(`label:has-text("Fixed discount to entire order") span`).first();
 
  await adminpage.navigate(ENV.adminURL);
  await adminpage.loginAdmin(testData.admin.email,testData.admin.password);
  await coupon.openNewCouponForm();
  await coupon.fillCouponForm(testData.coupon.couponCode, testData.coupon.description,testData.coupon.discount);
  await coupon.fillPurchaseConditions(testData.coupon.minAmount, testData.coupon.minQyt);
  await discountTypeRadio.click();
  await coupon.startANDendDates(0, 7);
  await coupon.selectDefaultOption();
  await coupon.addCustomerEmail(testData.coupon.email);
  await coupon.enterPurchasedAmount(testData.coupon.amount);
 
  });
 
  test.only("step-4 New product", async({page})=>{
    const product=new ProductPage (page);
    const adminpage=new Adminpage (page);
    await adminpage.navigate(ENV.adminURL); 
    await adminpage.loginAdmin(testData.admin.email,testData.admin.password);
    await product.openNewProductForm();
    await product.fillGeneralDetails("New product B","testB", "201","60");
    const fileinput = page.locator('#images input[type="file"]');
    await fileinput.setInputFiles(ENV.systempath);
    await product.fillSearchEngineOptimize("kyeB", "metatitleB","metakeywordB","descriptionB");
    await product.ProductStatus(true);
    await product.ProductQuantity("20");
    await page.locator ("select[id='attributes[0][value]']").selectOption ('1');
    await page.locator ("select[id='attributes[1][value]']").selectOption ('4');
    await product.saveProduct();
  


  })



   