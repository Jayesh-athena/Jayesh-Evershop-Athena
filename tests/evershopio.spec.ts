import { test, expect, Page, chromium } from "@playwright/test";
import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env.ts";
import { error } from "console";
 
 
// pass complete browser context - 1 solution{ scalable }
// pass context -solution
// pass nothing -browser (flaky)
 
test("eversopio pricing ", async ({ page, context }) => {
 
    //Login As admin
    await page.goto(ENV.evershopio);
    await page.pause();
    await page.locator('div').filter({ hasText: /^Pay monthly$/ }).nth(1).click();
    await page.pause();
    await page.getByText('Pay yearly save 20%').click();
    await page.pause();

});