import {test,expect} from '@playwright/test'
import path from 'path'

test.describe ('playwrite Jayesh practice', ()=> {

    const baseURL='http://localhost:3000/locator.html';
    test.beforeEach(async({page})=>{
        await page.goto(baseURL);
        
    });

test.only ("Handle frames  operations ", async ({ page }) => {
 

const frame= page.frameLocator('[data-testid="iframe-demo"]');
await frame.getByRole('textbox',{name:'Type inside iframe:'}).fill('test');
const valuess= await frame.getByRole('textbox',{name:'Type inside iframe:'}).inputValue();
console.log(valuess);

await frame.getByText ('Submit').click();
await page.pause();
 
});



});