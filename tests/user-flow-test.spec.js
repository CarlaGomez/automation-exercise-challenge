const { test } = require('@playwright/test');
import ProductsPage from '../pages/products-page';
import Shared from '../pages/shared';

let productsPage, shared;

test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    shared = new Shared(page);

    await shared.blockGoogleAds();
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