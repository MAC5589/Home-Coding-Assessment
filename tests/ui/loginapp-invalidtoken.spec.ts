import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.pages';
import users from '../../data/users.json';
import { getBaseUrl } from '../utils/baseUrl';

const invalidScenarios = [
  { name: 'Invalid username/password', data: users.invalidUser },
  { name: 'Empty username', data: users.emptyUsername },
  { name: 'Empty password', data: users.emptyPassword }
];

test.describe('Login APP - Invalid Credentials', () => {
  invalidScenarios.forEach(scenario => {
    test(`${scenario.name} shows error and stays on login`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(scenario.data.username, scenario.data.password);

      await expect(loginPage.flashMessage()).toContainText(scenario.data.expectedMessage);
      await expect(page).toHaveURL(`${getBaseUrl()}/login`);
    });
  });
});