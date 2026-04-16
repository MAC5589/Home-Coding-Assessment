import { Locator, Page } from '@playwright/test';

export class SecureAreaPage {
  constructor(private page: Page) {}

  heading(): Locator {
    return this.page.getByRole('heading', { name: 'Secure Area', exact: true });
  }

  async isDisplayed() {
    return await this.heading().isVisible({ timeout: 5000 });
  }

  async getWelcomeMessage() {
    return await this.page.getByRole('heading', { name: 'Welcome to the Secure Area.' }).textContent();
  }

  async logout() {
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }

  async getUrl() {
    return this.page.url();
  }
}