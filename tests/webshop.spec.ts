import { test, expect } from '@playwright/test';
 
test.describe('Register on webshop', () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.pause();  
    ////await page.getByText('Your registration completed').click();
 
   
  });
 
 
 test('test- recorded test', async ({ page }) => {

  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('jayeshD');
  await page.getByRole('textbox', { name: 'Last name:' }).fill('Hadap');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('jayrajhadap4444@gmail.com');
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Legal@4554');
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Legal@4554');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Your registration completed')).toBeVisible();
  //await page.getByText('Your registration completed').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});


});

