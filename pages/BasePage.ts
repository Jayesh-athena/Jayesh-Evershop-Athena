import { Page, Locator, expect } from "@playwright/test";
import { getLocator } from "../tests/locators/subscription.locator";

export class BasePages {
protected page: Page;

constructor(page: Page)
{
    this.page = page;

}

protected locate(locator: any): Locator{
    return getLocator (this.page, locator);
}

async navigate(url: string): Promise<void> {
    await this.page.goto(url);
}

async assertURL(expectedUrl: string){
    await expect(this.page).toHaveURL(expectedUrl);
}


}