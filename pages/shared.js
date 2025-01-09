class Shared {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.menuSection = {
      productsOption: page.locator('a[href="/products"]'),
    };
  }

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
}

export default Shared;
