import {test,expect} from '@playwright/test'
import path from 'path'

test.describe ('playwrite Jayesh practice', ()=> {

    const baseURL='http://localhost:3000/locator.html';
    test.beforeEach(async({page})=>{
        await page.goto(baseURL);
    });

    //test1 :getByRole
    test ('locator by Role', async ({page})=>{
        
      //await  expect(page.getByRole('heading',{name:'Playwright Locator Training'})).toBeVisible();
});

});