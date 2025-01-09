const { expect } = require('@playwright/test');
import ProductsPage from './products-page';

class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.productsPage = new ProductsPage(page);
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
    this.loginLink = page.locator('a[href="/login"]').nth(1);
  }

  async validateProductsInCart(productNumber) {
    await expect(this.productsPage.productDetail(productNumber)).toBeVisible();
  }

  async goToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async goToLoginPage() {
    await this.loginLink.click();
  }
}

export default CartPage;
