import { Locator, Page } from '@playwright/test';
import { getBaseUrl } from '../tests/utils/baseUrl';

export class LoginPage {
  constructor(protected page: Page) {}

  heading(): Locator {
    return this.page.getByRole('heading', { name: 'Login Page', exact: true });
  }

  async goto() {
    await this.page.goto(`${getBaseUrl()}/login`);
  }

  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  flashMessage(): Locator {
    return this.page.locator('#flash');
  }

  getUrl() {
    return this.page.url();
  }
}