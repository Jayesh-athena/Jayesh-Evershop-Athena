import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { applocators } from "../tests/locators/subscription.locator";
import { BasePages } from "./BasePage";
import { Adminpage } from "./AdminPage";

export class ProductPage extends Adminpage{
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async openNewProductForm() {
    await this.locate (applocators.NewProductclick).click();
   
  }


  async fillGeneralDetails(name: string, sku: string, price: string, weight: string) {
    await this.locate (applocators.productnameInput).fill("New product B ");
    await this.locate (applocators.skuInput).fill("testB");
    await this.locate(applocators.priceInput).fill("2001");
    await this.locate(applocators.weightInput).fill("60");
  }

  async fillSearchEngineOptimize(urlKey: string, metaTitle: string, metaKeywords: string, metaDescription: string) {
    await this.locate(applocators.urlKey).fill("kyeB");
    await this.locate(applocators.metaTitle).fill("metatitleB");
    await this.locate(applocators.metaKeywords).fill("metakeywordB");
    await this.locate(applocators.metaDescription).fill("descriptionB");
   
  }

  async ProductStatus(enabled: boolean) {
     if (enabled) {
      await this.page.click(applocators.Enabled);
    } else {
      await this.page.click(applocators.Disabled);
    }
    
  }

  async ProductQuantity(quantity: string){
     await this.locate(applocators.Quantity).fill("20");
  }



  async ProductAttributes(color: string, size: string) {

    //await page.getByRole('cell', { name: 'Color' }).click();
    //await page.getByRole('cell', { name: 'Size' }).click();
    //await this.locate(applocators.colorSelect).selectOption("1");
    //await this.page.selectOption(applocators.sizeSelect, size);
   await this.locate (applocators.newproductcolor).click();
    await this.locate (applocators.newproductcolor).selectOption("1");
    }

  async saveProduct() {
    await this.locate (applocators.saveButton).click();
  }
}