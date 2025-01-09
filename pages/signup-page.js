const { expect } = require('@playwright/test');

class SignupPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('[data-qa="signup-name"]');
    this.emailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.signupPageText = page.getByText('Enter Account Information');
    this.titleRadioButton = (number) => page.locator(`#id_gender${number}`);
    this.passwordInput = page.locator('[data-qa="password"]');
    this.dayOfBirthDropdown = page.locator('[data-qa="days"]');
    this.monthOfBirthDropdown = page.locator('[data-qa="months"]');
    this.yearOfBirthDropdown = page.locator('[data-qa="years"]');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.firstNameInput = page.locator('[data-qa="first_name"]');
    this.lastNameInput = page.locator('[data-qa="last_name"]');
    this.companyInput = page.locator('[data-qa="company"]');
    this.firstAddressInput = page.locator('[data-qa="address"]');
    this.secondAddressInput = page.locator('[data-qa="address2"]');
    this.countryDropdown = page.locator('[data-qa="country"]');
    this.stateInput = page.locator('[data-qa="state"]');
    this.cityInput = page.locator('[data-qa="city"]');
    this.zipcodeInput = page.locator('[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
    this.loginPageTitle = page.getByText('Login to your account');
  }

  async createAccount(
    email,
    title,
    password,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobileNumber
  ) {
    await this.nameInput.fill(firstName + ' ' + lastName);
    await this.emailInput.fill(email);
    await this.signupButton.click();
    await expect(this.signupPageText).toBeVisible();
    await this.titleRadioButton(title).click();
    await this.passwordInput.fill(password);
    await this.dayOfBirthDropdown.selectOption(dayOfBirth);
    await this.monthOfBirthDropdown.selectOption(monthOfBirth);
    await this.yearOfBirthDropdown.selectOption(yearOfBirth);
    await this.newsletterCheckbox.check();
    await expect(this.newsletterCheckbox).toBeChecked();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.companyInput.fill(company);
    await this.firstAddressInput.fill(address1);
    await this.secondAddressInput.fill(address2);
    await this.countryDropdown.selectOption(country);
    await this.stateInput.fill(state);
    await this.cityInput.fill(city);
    await this.zipcodeInput.fill(zipcode);
    await this.mobileNumberInput.fill(mobileNumber);
    await this.createAccountButton.click();
  }
}

export default SignupPage;
