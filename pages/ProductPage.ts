import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { applocators } from "../tests/locators/subscription.locator";
import { BasePages } from "./BasePage";
import { Adminpage } from "./AdminPage";
import { ENV } from "../tests/utils/env";

export class ProductPage extends Adminpage{
  async newProductName(oldProductName: string, newProductName: string) {
    // Navigate to products list 
    await this.page.getByRole('link', { name: 'Products', exact: true }).click();

    // Find the product row that contains the old product name
    const productRow = this.page.locator('tr', { hasText: oldProductName }).first();
    await productRow.waitFor({ state: 'visible', timeout: 5000 });

    // Primary: click the product name link inside the row to open edit page (product names are links in the UI)
    const nameLink = productRow.getByRole('link', { name: oldProductName });
    if (await nameLink.count() > 0) {
      await nameLink.first().click();
    } else {
      // fallback: try Edit link/button inside the row (some UI versions use an explicit Edit action)
      const editLink = productRow.getByRole('link', { name: 'Edit' });
      if (await editLink.count() > 0) {
        await editLink.first().click();
      } else {
        const editButton = productRow.getByRole('button', { name: 'Edit' });
        if (await editButton.count() > 0) {
          await editButton.first().click();
        } else {
          // last resort: any element with visible text 'Edit'
          const anyEdit = productRow.getByText('Edit');
          if (await anyEdit.count() > 0) {
            await anyEdit.first().click();
          } else {
            throw new Error(`Edit action not found in product row for "${oldProductName}"`);
          }
        }
      }
    }

    // Update the product name and save
    await this.locate(applocators.productnameInput).fill(newProductName);
    await this.locate(applocators.saveButton).click();

    // Wait until the updated product appears in the products list
    await this.page.getByRole('link', { name: 'Products', exact: true }).click();
    await this.page.locator('tr', { hasText: newProductName }).first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
  }

  /**
   * Update product images for an existing product by name.
   * imagePath may be a single file path or an array of paths (same shape as setInputFiles).
   */
  async updateProductImages(oldProductName: string, imagePath: string | string[]) {
    // Navigate to products list (use exact to avoid resolving multiple links)
    await this.page.getByRole('link', { name: 'Products', exact: true }).click();

    // Find product row and open its edit page
    const productRow = this.page.locator('tr', { hasText: oldProductName }).first();
    await productRow.waitFor({ state: 'visible', timeout: 5000 });

    // Primary: click the product name link inside the row
    const nameLink = productRow.getByRole('link', { name: oldProductName });
    if (await nameLink.count() > 0) {
      await nameLink.first().click();
    } else {
      // fallback to Edit action if present
      const editLink = productRow.getByRole('link', { name: 'Edit' });
      if (await editLink.count() > 0) {
        await editLink.first().click();
      } else {
        const editButton = productRow.getByRole('button', { name: 'Edit' });
        if (await editButton.count() > 0) {
          await editButton.first().click();
        } else {
          const anyEdit = productRow.getByText('Edit');
          if (await anyEdit.count() > 0) {
            await anyEdit.first().click();
          } else {
            throw new Error(`Edit action not found in product row for "${oldProductName}"`);
          }
        }
      }
    }

    // Wait a short time for the edit page to load (or navigation to happen)
    await this.page.waitForLoadState('networkidle').catch(() => {});

    // Debug: log the images container HTML to help diagnose why deletes may not work
    try {
      const beforeHtml = await this.page.locator('#images').first().innerHTML().catch(() => '');
      console.log('PRODUCT PAGE - #images BEFORE removal:', beforeHtml ? beforeHtml.slice(0, 1000) : '<empty>');
    } catch (e: any) {
      console.log('PRODUCT PAGE - could not read #images before removal', e?.message || e);
    }

    // Before uploading new files, try to remove any existing images/thumbnails
    const imagesContainer = this.page.locator('#images');
    if (await imagesContainer.count() > 0) {
      // Strategy A: click obvious remove/delete controls
      const clickCandidates = async () => {
        const candidates = imagesContainer.locator('button, a, [role="button"], .remove, .delete');
        const total = await candidates.count();
        for (let i = 0; i < total; i++) {
          const el = candidates.nth(i);
          let text = '';
          try { text = (await el.innerText()).trim(); } catch { text = ''; }
          const title = (await el.getAttribute('title')) || '';
          const aria = (await el.getAttribute('aria-label')) || '';
          if (/remove|delete|×|x|trash/i.test(text) || /remove|delete|trash/i.test(title) || /remove|delete|trash/i.test(aria)) {
            this.page.once('dialog', (d) => d.accept().catch(() => {}));
            await el.click().catch(() => {});
            await this.page.waitForTimeout(300);
          }
        }
      };

      // Strategy B: look for thumbnail images and try to find surrounding delete controls
      const removeByThumbnails = async () => {
        const thumbs = imagesContainer.locator('img');
        const before = await thumbs.count();
        for (let i = 0; i < before; i++) {
          const img = thumbs.nth(i);
          // try to find a sibling or ancestor button/link that likely removes the image
          const parent = img.locator('xpath=..');
          const ancestorCandidates = [parent, parent.locator('xpath=..'), parent.locator('xpath=../..')];
          let clicked = false;
          for (const anc of ancestorCandidates) {
            const candidates = anc.locator('button, a, [role="button"], .remove, .delete');
            const cnt = await candidates.count();
            for (let j = 0; j < cnt; j++) {
              const c = candidates.nth(j);
              let text = '';
              try { text = (await c.innerText()).trim(); } catch { text = ''; }
              const title = (await c.getAttribute('title')) || '';
              const aria = (await c.getAttribute('aria-label')) || '';
              if (/remove|delete|×|x|trash/i.test(text) || /remove|delete|trash/i.test(title) || /remove|delete|trash/i.test(aria) || text === '') {
                this.page.once('dialog', (d) => d.accept().catch(() => {}));
                await c.click().catch(() => {});
                clicked = true;
                await this.page.waitForTimeout(300);
                break;
              }
            }
            if (clicked) break;
          }
        }
        const after = await imagesContainer.locator('img').count();
        return { before, after };
      };

      // Try both strategies repeatedly until no thumbnails remain or no progress
      let attempts = 0;
      while (attempts < 5) {
        const beforeCount = await imagesContainer.locator('img').count();
        await clickCandidates();
        const result = await removeByThumbnails();
        if (result.after === 0) break;
        if (result.after === beforeCount) break; // no progress
        attempts++;
      }
    }

    // Locate file input and set files
    const fileinput = this.page.locator('#images input[type="file"]');
    if (await fileinput.count() === 0) {
      throw new Error('Image file input not found on product edit page');
    }
    await fileinput.setInputFiles(imagePath as any);

    // Save the product
    await this.locate(applocators.saveButton).click();

    // Return to products list and wait for the product row to be visible
    await this.page.getByRole('link', { name: 'Products', exact: true }).click();
    await this.page.locator('tr', { hasText: oldProductName }).first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
  }
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async openNewProductForm() {
    await this.locate (applocators.NewProductclick).click();
   
  }


  async fillGeneralDetails(name: string, sku: string, price: string, weight: string) {
    
    await this.locate (applocators.productnameInput).fill("New product G");
    await this.locate (applocators.skuInput).fill("testG");
    await this.locate(applocators.priceInput).fill("2006");
    await this.locate(applocators.weightInput).fill("74");
  }

  async fillSearchEngineOptimize(urlKey: string, metaTitle: string, metaKeywords: string, metaDescription: string) {
    await this.locate(applocators.urlKey).fill("kye");
    await this.locate(applocators.metaTitle).fill("metatitleG");
    await this.locate(applocators.metaKeywords).fill("metakeywordG");
    await this.locate(applocators.metaDescription).fill("descriptionG");
   
  }

  async ProductStatus(enabled: boolean) {
     if (enabled) {
      await this.page.click(applocators.Enabled);
    } else {
      await this.page.click(applocators.Disabled);
    }
    
  }

  async ProductQuantity(quantity: string){
     await this.locate(applocators.Quantity).fill("25");
  }



  async ProductAttributes(color: string, size: string) {

    //await page.getByRole('cell', { name: 'Color' }).click();
    //await page.getByRole('cell', { name: 'Size' }).click();
    //await this.locate(applocators.colorSelect).selectOption("1");
    //await this.page.selectOption(applocators.sizeSelect, size);
   await this.locate (applocators.newproductcolor).click();
    await this.locate (applocators.newproductcolor).selectOption("1");
    }

  async saveProduct() {
    await this.locate (applocators.saveButton).click();
  }}