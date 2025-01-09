const { expect } = require('@playwright/test');

class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.placeOrderButton = page.getByText('Place Order');
    this.nameOnCardInput = page.locator('[data-qa="name-on-card"]');
    this.cardNumberInput = page.locator('[data-qa="card-number"]');
    this.cvcInput = page.locator('[data-qa="cvc"]');
    this.expirationMonthInput = page.locator('[data-qa="expiry-month"]');
    this.expirationYearInput = page.locator('[data-qa="expiry-year"]');
    this.payButton = page.locator('[data-qa="pay-button"]');
    this.orderConfirmationMessage = page.getByText('Congratulations! Your order has been confirmed!');
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async payOrder(
    cardName,
    cardNumber,
    cardCvc,
    cardExpirationMonth,
    cardExpirationYear
  ) {
    await this.nameOnCardInput.fill(cardName);
    await this.cardNumberInput.fill(cardNumber);
    await this.cvcInput.fill(cardCvc);
    await this.expirationMonthInput.fill(cardExpirationMonth);
    await this.expirationYearInput.fill(cardExpirationYear);
    await this.payButton.click();
    await expect(this.orderConfirmationMessage).toBeVisible();
  }
}

export default CheckoutPage;
