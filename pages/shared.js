import SignupPage from './signup-page';
const { expect } = require('@playwright/test');

class Shared {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.signupPage = new SignupPage(page);
    this.menuSection = {
      productsOption: page.locator('a[href="/products"]'),
      cartOption: page.locator('a[href="/view_cart"]'),
      logoutOption: page.locator('a[href="/logout"]'),
    };
  }

  // Generate a random number between 1 and 20
  async generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  async blockGoogleAds() {
    await this.page.route('**/*', (route) => {
      const url = route.request().url();
      if (
        url.includes('googleads.g.doubleclick.net') ||
        url.includes('adservice.google.com')
      ) {
        route.abort(); // Block ad requests
      } else {
        route.continue(); // Allow other requests
      }
    });
  }

  async goToCart() {
    await this.menuSection.cartOption.click();
  }

  async logout() {
    await this.menuSection.logoutOption.click();
    await expect(this.signupPage.loginPageTitle).toBeVisible();
  }
}

export default Shared;
