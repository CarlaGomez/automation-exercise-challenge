const { test } = require('@playwright/test');
import ProductsPage from '../pages/products-page';
import Shared from '../pages/shared';
import CartPage from '../pages/cart-page';
import SignupPage from '../pages/signup-page';
import { faker } from '@faker-js/faker/locale/en';

let productsPage, shared, cartPage, signupPage;

test.beforeEach(async ({ page }) => {
  productsPage = new ProductsPage(page);
  shared = new Shared(page);
  cartPage = new CartPage(page);
  signupPage = new SignupPage(page);

  await shared.blockGoogleAds();
  await page.goto('/');
});

test.describe('User flow test', () => {
  test('User flow', async () => {
    // Generate fake random data with faker
    const name = faker.person.firstName();
    const email = faker.internet.email({ firstName: name });
    const title = faker.number.int({ min: 1, max: 2 });
    const password = faker.internet.password();
    const monthOfBirth = faker.date.month();
    const lastName = faker.person.lastName();
    const company = faker.company.name();
    const address1 = faker.location.streetAddress();
    const address2 = faker.location.streetAddress();
    const state = faker.location.state();
    const city = faker.location.city();
    const zipcode = faker.location.zipCode();
    const mobileNumber = faker.phone.number();

    await productsPage.goToProductsSection();
    await productsPage.goToProductDetails('3'); // Enter the index of the product you want to view
    await productsPage.enterProductQuantity();
    await productsPage.addProductToCart();
    await productsPage.viewCart();
    await cartPage.validateProductsInCart('3'); // Enter the index of the same product added to the cart
    await cartPage.goToCheckout();
    await cartPage.goToLoginPage();
    await signupPage.createAccount(
      email,
      title,
      password,
      '15',
      monthOfBirth,
      '1995',
      name,
      lastName,
      company,
      address1,
      address2,
      'United States',
      state,
      city,
      zipcode,
      mobileNumber
    );
  });
});
