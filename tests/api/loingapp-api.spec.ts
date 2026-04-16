import { test, expect } from '@playwright/test';
import { LoginPageAPI } from '../../pages/login-api.page';
import users from '../../data/users.json';

const apiScenarios = [
  {
    name: 'Valid login',
    data: users.validUser,
    shouldSucceed: true
  },
  {
    name: 'Invalid password',
    data: users.emptyPassword,
    shouldSucceed: false
  },
  {
    name: 'Invalid username',
    data: users.invalidUser,
    shouldSucceed: false
  }
];

test.describe('Login API Tests', () => {
  apiScenarios.forEach(scenario => {
    test(`${scenario.name} - verify /authenticate endpoint`, async ({ page }) => {
      // Create page object with API response interception
      const loginPageAPI = new LoginPageAPI(page);

      // Perform login and capture API response
      await loginPageAPI.loginAndCaptureAPI(scenario.data.username, scenario.data.password);

      // Verify API response was captured
      const response = loginPageAPI.getLastResponse();
      expect(response).not.toBeNull();
      expect(response?.status).toBeGreaterThanOrEqual(200);
      expect(response?.status).toBeLessThan(500);

      // Verify flash message matches expected from data
      const flashMessage = await loginPageAPI.flashMessage().textContent();
      expect(flashMessage).toContain(scenario.data.expectedMessage);

      // Log results
      console.log(`✓ ${scenario.name}`);
      console.log(`  Status: ${response?.status}`);
      console.log(`  Message: ${flashMessage}`);
    });
  });
});
