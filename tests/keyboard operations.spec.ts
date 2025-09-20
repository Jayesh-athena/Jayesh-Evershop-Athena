import {test,expect} from '@playwright/test'
import path from 'path'
test.only("handle keybaord operation ", async ({ page }) => {
 
await page.goto('http://localhost:3000/locator.html');
const leftclick= page.getByRole("button",{name:"Left Click Me"});
await leftclick.click();
const rgtclick= page.getByRole("button",{name:"Right Click Me"});
await rgtclick.click({button: "right"});
await expect(page.locator("#rightClickMsg")).toHaveText("✅ Right button clicked!")
await  page.getByRole("button",{name:"Double Click Me"}).dblclick();
 await expect(page.locator("#doubleClickMsg")).toHaveText("✅ Double button clicked!")
const dbl=page.getByRole("button",{name:"Double Click Me"});
 
await dbl.press("Tab");
await page.keyboard.press("Enter");
await page.keyboard.type("Hello Jayesh",{delay:1000});
await page.pause();
// await page.mouse.move(100,200);
// await page.mouse.down();
await page.keyboard.press("Control+A");
await page.keyboard.press("Control+C");
await page.locator('#nameInput').clear();
await page.keyboard.press("Control+V");
 


});