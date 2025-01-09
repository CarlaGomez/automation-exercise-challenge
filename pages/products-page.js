const { expect } = require('@playwright/test');
import Shared from './shared';

class ProductsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.shared = new Shared(page);
    this.searchProductInput = page.locator('#search_product');
    this.productDetail = (productNumber) =>
      page.locator(`a[href="/product_details/${productNumber}"]`);
    this.productQuantityInput = page.locator('#quantity');
    this.addToCartButton = page.locator('.cart');
    this.viewCartButton = page.getByText('View Cart');
  }

  async goToProductsSection() {
    await this.shared.menuSection.productsOption.click();
    await expect(this.searchProductInput).toBeVisible();
  }

  async goToProductDetails(productNumber) {
    await this.productDetail(productNumber).click();
  }

  async enterProductQuantity() {
    const quantity = await this.shared.generateRandomNumber();
    await this.productQuantityInput.fill(quantity.toString());
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async viewCart() {
    await this.viewCartButton.click();
  }
}

export default ProductsPage;
