import {test,expect} from '@playwright/test'
import path from 'path'

test.only("handle drag and drop ", async ({ page }) => {
 
await page.goto('http://localhost:3000/locator.html');
 
const sorce=page.locator("#dragBox");
const traget=page.locator("#dropZone");
//
await sorce.dragTo(traget);
await expect(page.locator("#dropResult")).toHaveText('Dropped successfully!');
});
 

