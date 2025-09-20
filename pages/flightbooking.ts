import { Page, expect, Locator } from "@playwright/test";
import {getFormattedDate} from "../tests/utils/helper";
import { BasePages } from "./BasePage";
 
export class FlightBookingPage extends BasePages {
  readonly page: Page;
 
  // Modal Locators
  readonly loginModal: Locator;
  readonly mobileInput: Locator;
  readonly continueBtn: Locator;
  readonly accountList: Locator;
  readonly closeBtn: Locator;
 
  // Flight booking locators
  readonly searchBtn: Locator;
 
  constructor(page: Page) {
    super(page);
    this.page = page;
 
    // Modal locators
    this.loginModal = page.locator('section[data-cy="CommonModal_2"]');
    this.mobileInput = this.loginModal.locator('input[data-cy="userName"]');
    this.continueBtn = this.loginModal.locator('button[data-cy="continueBtn"]');
    this.accountList = this.loginModal.locator('ul[data-cy="LoginFlowPopup_82"] li');
    this.closeBtn = this.loginModal.locator('span[data-cy="closeModal"]');
 
    // Flight booking locators
    this.searchBtn = page.getByText("Search");
  }

    async navigateflightbookingpage(url: string): Promise<void> {
    await this.page.goto(url);
  }
 
  //Fill mobile number and click continue
async enterMobileNumber(mobileNumber: string) {
  const modal = this.page.locator('section[data-cy="CommonModal_2"]');
  await modal.locator('input[data-cy="userName"]').fill(mobileNumber);
  await modal.locator('button[data-cy="continueBtn"]').click();
}
 
// Select account type inside modal
async selectAccount(accountType: string) {
  const modal = this.page.locator('section[data-cy="CommonModal_2"]');
  // Normalize Excel input to match data-acctype
  const normalized = accountType.toLowerCase().includes("personal") ? "personal" : "myBiz";
  await modal.locator(`ul[data-cy="LoginFlowPopup_82"] li[data-acctype="${normalized}"]`).click();
   if (normalized === "personal") {
    // Personal account has a close button
    await modal.locator('span[data-cy="closeModal"]').click();
  } else {
    // For MyBiz, click outside the modal to close
    await this.page.mouse.click(0, 0); // Click top-left corner (outside modal)
    await modal.waitFor({ state: "detached" });
  }
   //await modal.locator('span[data-cy="closeModal"]').click();
}
 
  // Select From city
  async selectFromCity( fromOption: string) {
    await this.page.locator(`input[data-cy="fromCity"]`).click();
    await this.page.getByRole("option", { name: fromOption }).click();
  }
 
  // Select To city
  async selectToCity( toOption: string) {
    await this.page.locator(`input[data-cy="toCity"]`).click();
    await this.page.getByRole("option", { name: toOption }).click();
  }
 
  // Select departure date
  async selectDepartDate(daysFromToday: number) {
    const dateLabel = getFormattedDate(daysFromToday);
    await this.page.getByRole("gridcell", { name: dateLabel }).click();
    await this.page.mouse.click(0, 0);
  }
 
  // Select return date
  async selectReturnDate(daysFromToday: number) {
    const dateLabel = getFormattedDate(daysFromToday);
    await this.page.getByText("ReturnTap to add a return").click();
    await this.page.getByRole("gridcell", { name: dateLabel }).click();
  }
 
  // Select fare type
  async selectFareType(fareType: string) {
    await this.page.getByText(fareType, { exact: true }).click();
   
  }
 
  // Click Search button
  async searchFlights() {
    await this.searchBtn.click();
    await expect(this.page).toHaveURL(/flight/);
  }
}