//SinupPage.ts
import { expect } from "@playwright/test";
import { BasePages } from "./BasePage";
import { applocators } from "../tests/locators/subscription.locator";

export class SignupPage extends BasePages {
    async openNewCustomerForm ()
    {
        await this.locate(applocators.navSignup).nth(1).click();
        await expect(this.locate(applocators.linkCreateAccount)).toBeEnabled();
        await this.locate(applocators.linkCreateAccount).click();
    }


    async registerNewUser(name: string, Email: string, Password: string) 
    {
    await this.locate(applocators.fullNameInput).fill(name);
    await this.locate(applocators.emailInput).fill(Email);
    await this.locate(applocators.passwordInput).fill(Password);
    await this.locate(applocators.signupButton).click();
    }

    

}
 