// import { test, expect } from '@playwright/test';
// import { subcriptionlocators } from './locator/subcription.locator.ts';
// //import testdata from './data/testdata.json';
// import { generateRandomEmail } from './utils/randommail.helper.ts';
// import { ENV } from './utils/env.ts';
// import { signuplocator } from './locator/signup.locator.ts';
// import { debug } from 'console';

// //Step 1- Create an account
// test.describe('demo test for create an account', () => {

//   test.only('standard test', async ({ page }) => {
//     await page.goto(ENV.baseURL);
//     await page.locator('div:nth-child(3) > a').first().click();
//     await page.pause();
//     await page.getByRole('link', { name: 'Create an account' }).click();
//     const randommail =generateRandomEmail(testdata.user.Email);
//     //await page.getByRole('textbox', { name: 'Full Name' }).click();
//     await page.getByRole('textbox', { name: 'Full Name' }).fill('Test user 1');
//     //await page.getByRole(subcriptionlocators.email.role, {name: subcriptionlocators.email.name}).fill(randommail)
//     await page.getByRole(signuplocator.inputEmail.role, { name: signuplocator.inputEmail.name }).fill(randommail);
//     //await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('123456');
//     await page.getByRole('button', { name: 'SIGN UP' }).click();
//     await page.pause();

//   });
// });

// //Step 2- Login 

  