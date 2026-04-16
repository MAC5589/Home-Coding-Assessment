import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.pages';
import { SecureAreaPage } from '../../pages/secure-area.page';
import users from '../../data/users.json';
import { getBaseUrl } from '../utils/baseUrl';

const loginScenarios = [
  {
    name: 'Happy path',
    data: users.validUser,
    shouldVerify: false
  },
  {
    name: 'Verifications',
    data: users.validUser,
    shouldVerify: true
  }
];

test.describe('Login APP', () => {
  loginScenarios.forEach(scenario => {
    test(`E2E - ${scenario.name}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const secureAreaPage = new SecureAreaPage(page);

      await loginPage.goto();

      if (scenario.shouldVerify) {
        await expect(loginPage.heading()).toBeVisible();
      }

      await loginPage.login(scenario.data.username, scenario.data.password);

      if (scenario.shouldVerify) {
        await expect(loginPage.flashMessage()).toContainText(scenario.data.expectedMessage);
        await expect(page).toHaveURL(`${getBaseUrl()}/secure`);
        await expect(secureAreaPage.heading()).toBeVisible();
      }

      await secureAreaPage.logout();

      if (scenario.shouldVerify) {
        await expect(page).toHaveURL(`${getBaseUrl()}/login`);
        await expect(secureAreaPage.heading()).not.toBeVisible();
      }
    });
  });
});