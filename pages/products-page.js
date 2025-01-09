const { expect } = require('@playwright/test');

class ProductsPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.productsOption = page.locator('a[href="/products"]');
        this.searchProductInput = page.locator('#search_product');
        this.viewProductButton = (productNumber) => page.locator(`a[href="/product_details/${productNumber}"]`);
        this.productQuantityInput = page.locator('#quantity');
        this.addToCartButton = page.locator('.cart');
    }

    async generateRandomNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }

    async goToProductsSection() {
        await this.productsOption.click();
        await expect(this.searchProductInput).toBeVisible();
    }

    async goToProductDetails(productNumber) {
        await this.viewProductButton(productNumber).click();
    }

    async enterProductQuantity() {
        const quantity = await this.generateRandomNumber();
        await this.productQuantityInput.fill(quantity.toString());
    }

    async addProductToCart() {
        await this.addToCartButton.click();

    }
}

export default ProductsPage;
