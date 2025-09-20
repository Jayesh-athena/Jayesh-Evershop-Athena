import { expect } from "playwright/test";
import { BasePages } from "./BasePage";
import { applocators } from "../tests/locators/subscription.locator";

export class Adminpage extends BasePages 
{
    async loginAdmin(email: string, password: string){
      await this.locate (applocators.adminEmailInput).fill(email);
      await this.locate (applocators.adminPasswordInput).fill(password);
      await this.locate (applocators.adminSigninButton).click();

    }
}