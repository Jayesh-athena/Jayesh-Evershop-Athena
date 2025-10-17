import { test } from "@playwright/test";
import testData from "./data/testData.json";
import { ENV } from "./utils/env";
import { generateRandomEmail } from "./utils/helper";
import{ SignupPage } from "../pages/SignupPage";
import{ Adminpage } from "../pages/AdminPage";
import {CouponPage } from "../pages/CoupanPage"
import { ProductPage } from "../pages/ProductPage";
import { BasePages } from "../pages/BasePage";

test ("TC01-Create new product", async({page})=>{
    const product=new ProductPage (page);
    const adminpage=new Adminpage (page);
    await adminpage.navigate(ENV.adminURL); 
    await adminpage.loginAdmin(testData.admin.email,testData.admin.password);
    await product.openNewProductForm();
    await product.fillGeneralDetails("New product G","testG", "2006","74");
    const fileinput = page.locator('#images input[type="file"]');
    await fileinput.setInputFiles(ENV.systempath);
    await product.fillSearchEngineOptimize("kyeG", "metatitleG","metakeywordG","descriptionG");
    await product.ProductStatus(true);
    await product.ProductQuantity("25");
    await page.locator ("select[id='attributes[0][value]']").selectOption ('1');
    await page.locator ("select[id='attributes[1][value]']").selectOption ('4');
    await product.saveProduct();
  


  })
