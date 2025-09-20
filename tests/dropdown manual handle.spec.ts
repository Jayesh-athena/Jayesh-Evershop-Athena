import {test,expect} from '@playwright/test'
import path from 'path'
test.only("Power of get by role", async ({ page }) => {
await page.goto('http://localhost:3000/locator.html');
 
// await page.fill('#courseInput','Playwright');
 const optionsloc=await page.locator('#courses option').all();
 const optionsloc1=await page.locator('#courses option');
 
 
for(const option of optionsloc)
{
   console.log(option);
}
 
const options: string []=[];
for (const opt of optionsloc)
{
   options.push(await opt.getAttribute("value") || " ");
}
 
console.log("alloption:",options);
 
const count= await optionsloc1.count();
console.log(count);
console.log('*******');
for( let i=0;i<count;i++)
{
  console.log(await optionsloc1.nth(i).getAttribute('value'));
}
const optionss=['Playwright','Selenium','Cypress','Manual Testing'];
const input= page.locator('#courseInput');
for(const option of optionss)
{
  await input.fill(option);
  await expect(input).toHaveValue(option);
  console.log(option);
}
});