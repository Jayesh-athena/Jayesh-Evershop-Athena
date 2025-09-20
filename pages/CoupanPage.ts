import { expect, Page } from "@playwright/test";
import { BasePages } from "./BasePage";
import { applocators } from "../tests/locators/subscription.locator";
import * as helper from "../tests/utils/helper.ts";
export class CouponPage extends BasePages {
 protected page: Page;
  constructor(page: Page){
    super(page);
    this.page=page;
  }
 
  async openNewCouponForm() {
    await this.locate (applocators.newcouponcodeButton).click();
   
  }
 
  async fillCouponForm(couponCode: string, description: string, discount: string) {
    await this.locate (applocators.couponCodeInput).fill(couponCode);
    await this.locate(applocators.descriptionInput).fill(description);
    await this.locate(applocators.discountAmountInput).fill(discount);
    //await this.locate(applocators.fixedDiscountOption).click();
  }
 
  async fillPurchaseConditions(minAmount: string, minQty: string) {
    await this.locate(applocators.minPurchaseAmountInput).fill(minAmount);
    await this.locate(applocators.minPurchaseQtyInput).fill(minQty);
  }
 
  async selectDefaultOption() {
    await this.locate(applocators.dropdownIndicator).click();
    await this.locate(applocators.defaultOption).click();
  }
 
  async addCustomerEmail(email: string) {
    await this.locate(applocators.customerEmailsInput).fill(email);
  }
 
  async enterPurchasedAmount(amount: string) {
    await this.locate(applocators.purchasedAmountInput).fill(amount);
  }
 
//   async saveCoupon() {
//     await this.locate(applocators.saveButton).click();
//    await expect(
//       this.locate(applocators.confirmationmesasage)).toHaveText("Coupon saved successfully!");{timeout:'5000'};
//     //   this.locate((applocators.confirmationmesasage)).isVisible;{timeout:'5000'};
//   }
async startANDendDates(startdate:number=0, enddate:number=7) {
     await this.locate (applocators.Sdate).click();
     await helper.selectdate(this.page,startdate);
     await this.locate (applocators.edate).click();
     await helper.selectdate(this.page,enddate);

     
}
};