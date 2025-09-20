import { test, expect, Page, } from "@playwright/test";
import { getLocator, applocators } from "./locators/subscription.locator.ts";
import testData from "./data/testData.json";
import * as helper from "./utils/helper.ts";
import { ENV } from "./utils/env.ts";
import { error } from "console";
import path from "path";
import fs from "fs";

test ("download files ", async ({ page } ) => {
    await page.goto ('http://localhost:3000/locator.html');
    const [download]= await Promise.all ([page.waitForEvent("download"),
    page.getByTestId ("btn-export").click(),
]);

    const targetPath= path.join(process.cwd(),"student.csv");
    await download.saveAs (targetPath);
    const content = fs.readFileSync (targetPath,"utf-8");
    expect(content).toContain ("Name");

});