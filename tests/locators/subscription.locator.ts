import { Locator, Page } from "@playwright/test";
 
type RoleLocator= {
  role : Parameters<Page["getByRole"]>[0];
  name?: string;
  exact?: boolean;
};
 
export const applocators = {
  // Navigation
  navSignup: ".self-center",
 
  // Signup
  linkCreateAccount: { role: "link" , name: "Create an account" } as RoleLocator,
  fullNameInput: { role: "textbox" as const, name: "Full Name" }as RoleLocator,
  emailInput: { role: "textbox" as const, name: "Email" }as RoleLocator,
  passwordInput: { role: "textbox" as const, name: "Password" }as RoleLocator,
  signupButton: { role: "button" as const, name: "SIGN UP" }as RoleLocator,
 
  // Admin login
  adminEmailInput: { role: "textbox" as const, name: "Email" }as RoleLocator,
  adminPasswordInput: { role: "textbox" as const, name: "Password" }as RoleLocator,
  adminSigninButton: { role: "button" as const, name: "SIGN IN" }as RoleLocator,
  nextButton:".next",
  coupon : {role:"link", name: "Coupons"} as RoleLocator,
  // Customers page
  Productlink : {role: "link" as const, name: "Products" } as RoleLocator,
  customersLink: { role: "link" as const, name: "Customers" }as RoleLocator,
  customerStatus: "text=StatusEnabled",
  startDate: {role:"textbox", name: "Start date" }as RoleLocator,
  endDate: {role:"textbox", name: "End date" }as RoleLocator,
   newCouponLink: (page:Page) =>
   page.locator('div').filter({ hasText: /^New Coupon$/ }).getByRole('link'),

   //Product page
   NewProductclick :  {role:"link", name: "New Product" } as RoleLocator, 
   productnameInput: {role:"textbox", name: "Name" } as RoleLocator,
   skuInput: {role:"textbox", name: "sku" } as RoleLocator,
   priceInput: {role:"textbox", name: "price" } as RoleLocator,
   weightInput:  {role:"textbox", name: "weight" } as RoleLocator,
   categorySelect: 'text=Select category',
   descriptionBox: 'textarea[placeholder="Description"]',
  urlKey: '#urlKey',
  metaTitle: '#metaTitle',
  metaKeywords: '#metaKeywords',
  metaDescription: {role: "textbox", name: "Meta description"} as RoleLocator,
  Quantity : {role: "textbox", name: "Quantity"} as RoleLocator,
  savebutton : {role: "button", name: "Save"} as RoleLocator,
  Enabled : 'text=Enabled',
  Disabled : 'text=Disabled',
  colorSelect: 'select[aria-label="Color"]',
  sizeSelect: 'select[aria-label="Size"]',
  //Disabled : {role: "button", name: "Disabled"} as RoleLocator,
  //productsize: (page:Page) => page.getByLabel('Size'),
  //productcolor: (page:Page) =>page.getByLabel('Color'),

  newproductcolor: (page:Page) =>page.locator ("select[id='attributes[0][value]']").selectOption ('1'),
  newproductize: (page:Page) =>page.locator ("select[id='attributes[1][value]']").selectOption ('4'),

   





   //Coupon code
    newcouponcodeButton: { role: "link" as const, name: "New Coupon" }as RoleLocator,
    couponCodeInput:{role: "textbox",  name: "Enter coupon code" }as RoleLocator,
    descriptionInput :{role:"textbox",  name: "Description" }as RoleLocator,
    discountAmountInput:{role:"textbox",  name: "Discount amount" }as RoleLocator,
    startdate:{role:'textbox', name: 'Start date'}as RoleLocator,
    enddate:{role:'textbox', name: 'End date'}as RoleLocator,
    minPurchaseAmountInput:{role:"textbox",  name: "Enter minimum purchase amount" }as RoleLocator,
    minPurchaseQtyInput :{role:"textbox", name: "Enter minimum purchase qty" }as RoleLocator,
    dropdownIndicator:(".css-1xc3v61-indicatorContainer"),
    defaultOption :{role:"option",  name: "Default" }as RoleLocator,
    customerEmailsInput:{role:"textbox",  name: "Enter customer emails" }as RoleLocator,
    purchasedAmountInput:{role:"textbox", name: "Enter purchased amount" }as RoleLocator,
    saveButton:{ role: "button" as const, name: "Save" }as RoleLocator,
    confirmationmesasage:{role:"alert", name:"Coupon saved successfully!"}as RoleLocator,
    Sdate : {role:"textbox", name: "Start date"} as RoleLocator,
    edate: {role:"textbox", name: "End date"} as RoleLocator,
    

    
    
    



   //product status

 
// Dynamic data for random email
dynamicCustomerEmailCell: (email: string): RoleLocator => ({
  role: "cell",     
  name: email,
  exact: true,
}),
 
};
 
export function getLocator(page: Page,locator:RoleLocator| string): Locator {
  if(typeof locator==="string")
  {
    return page.locator(locator);
  }
  const {role,name,exact}=locator;
  return page.getByRole(role,{name,exact});
}
 
 
//1. Evershop installation
//2. Folder structure of test case
//3. Testcase for
   //a. Table handle
   //b. pagination
   //c. Dates handle
   //d. multiple tabs and windows
   //e. File upload and system alert
 
//4. Writing locators.   