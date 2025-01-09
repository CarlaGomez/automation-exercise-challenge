const { test } = require('@playwright/test');
import ProductsPage from '../pages/products-page';

let productsPage;

test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    await page.goto('/');
})

test.describe('User flow test', () => {
    test('User flow', async () => {
        await productsPage.goToProductsSection();
        await productsPage.goToProductDetails('3'); // Enter the number of the product you want to view
        await productsPage.enterProductQuantity();
        await productsPage.addProductToCart();
    })
});