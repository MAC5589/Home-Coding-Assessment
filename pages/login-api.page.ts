import { Page } from '@playwright/test';
import { LoginPage } from './login.pages';

interface ApiResponse {
  url: string;
  status: number;
  body: any;
}

export class LoginPageAPI extends LoginPage {
  private lastResponse: ApiResponse | null = null;

  constructor(page: Page) {
    super(page);
    this.setupResponseInterception();
  }

  
  //  Setup response listener to capture API responses
   
  private setupResponseInterception(): void {
    this.page.on('response', async (response) => {
      if (response.url().includes('/authenticate') || response.url().includes('login')) {
        this.lastResponse = {
          url: response.url(),
          status: response.status(),
          body: await response.json().catch(() => null)
        };
      }
    });
  }

  
   // Login and capture API response
   
  async loginAndCaptureAPI(username: string, password: string): Promise<void> {
    await this.goto();
    await this.login(username, password);
    await this.page.waitForLoadState('networkidle');
  }

  
  // Get the last captured API response
  
  getLastResponse(): ApiResponse | null {
    return this.lastResponse;
  }

  
  //  Reset captured response (useful for multiple tests)
  
  resetResponse(): void {
    this.lastResponse = null;
  }
}
