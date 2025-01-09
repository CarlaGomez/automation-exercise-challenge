# QA Engineer Skill Test: Web Automation README

## Overview
This project focuses on automating a given user flow using Playwright. The deliverables include the test case design, automation script development, execution of tests, and reporting of results. 

## Framework Selection

### Chosen Framework: Playwright

### Justification:
- **Ease of Use:** Playwright offers an intuitive and straightforward syntax that simplifies the learning curve for testers, enabling quick adoption and efficient test creation.
  
- **Community Support:** Playwright boasts a robust and active community, providing regular updates, extensive documentation, and a wealth of shared resources. This ensures prompt resolution of issues and continuous improvements, making it easier for testers to find solutions and stay up to date with best practices.

- **Testing Features**: Rich built-in features such as automatic waiting, cross-browser testing, and support for modern web applications. Usually, web pages like this one require hovers, removing ad blocks, and interacting with custom UI components like dropdowns, checkboxes, sliders, iframes, etc, and in the end, Playwright offers more built-in capabilities and better handling of those interactions (luckily advanced interactions were not needed, but is worth it to look ahead).

  Additionally, Playwright’s cross-browser testing support and the easy configuration for testing in a mobile viewport were an important factor in my decision. It allows testing across multiple browsers, including mobile-specific ones like Safari for iOS, whereas Cypress is limited to desktop Chromium-based browsers and can only simulate mobile viewports. This simulation does not trigger actual touch events, which can be a limitation when testing mobile-specific behaviors.

- **Finally:** Cypress and Playwright are both simple in terms of syntax and configuration, what made me go for Playwright in the end was the fact that Playwright is a more QA-oriented framework than Cypress, Cypress regularly is more Front-end dev-oriented, although for this test both could be easily applied.

## Test Case Design

### Test Case Document 
#### **TC-001 User Flow: Purchase a product** 

**Description:** The purpose of this test case is to describe the steps and the expected results of purchasing a product without first being logged in.

**Preconditions:** 
- The website is accessible. 
- The user is not logged in. 
- A valid product list is displayed.

| **Step** | **Expected Result** |
|----------|---------------------|
| Navigate to the website. | The website loads successfully. |
| Go to the products page by clicking on the menu option. | The user is redirected to the products page and sees a list of products. |
| Click on the View Product button inside the third product of the list. | The third product's details page displays the correct information. |
| Enter the quantity of products to purchase. | The quantity is correctly inputted into the quantity field. |
| Add the product to the cart. | A modal is displayed saying that the product was added to the cart successfully. |
| Go to the cart by clicking the View Cart option inside the modal. | The user is redirected to the cart and sees the product and all its information (product name, quantity, price, total amount). |
| Click on Proceed to Checkout. | The user is prompted to either register or log in. |
| Click on the Register/Login option inside the modal. | The user is redirected to the login page. |
| Inside the login page, fill in the name and email of the signup form and click on Signup. | The user is redirected to a longer form to enter its information. |
| Fill all the fields with valid data and click on Create Account| The account is successfully created and the user is automatically logged in. |

**Optional Steps**
| **Step** | **Expected Result** |
|----------|---------------------|
| Go to the cart by clicking on the menu option. | The user is redirected to the cart and sees the product and all its information (product name, quantity, price, total amount). |
| Click on Proceed to Checkout. | The user is redirected  to the checkout and sees the addresses and the product with all its information (product name, quantity, price, total amount). |
| Click on Proceed to Place Order. | The user is redirected  to the payment page. |
| Fill the credit/debit card fields with valid information and click on Pay and Confirm order. | The purchase is completed. |
| Click on Logout. | The user is logged out of the account successfully and is redirected to the Login Page. |

## How to run the tests locally

### Pre-requisites

* Node.js needs to be installed -> To install Node.js go to https://nodejs.org/en
* Allure needs to be installed -> instructions to be found in https://allurereport.org/docs/install/

### installation

1. Clone the repo
   ```sh
   git clone https://github.com/CarlaGomez/automation-exercise-challenge.git
   ```
2. Install NPM packages: The dependencies are going to be installed (Playwright, Allure Reports, Faker.js)
   ```sh
   npm install
   ```
   or to install the same versions
   ```sh
   npm ci
   ```
3. Install Playwright Browsers
   ```sh
   npx playwright install
   ```
4. Run the tests: by default they are on headless mode, to launch the browsers open the playwright.config.js file and set headless: false.

   The Web and Mobile viewports are configured in playwright.config.js

   Type on the terminal:
   ```sh
      npm test
   ```
This will launch the Allure server by default after the tests run and the report will be visible.

## Tests in the CI/CD

This project has an integration with GitHub Actions, in the Actions section, all the previous executions can be seen, and inside the jobs, there is an "Artifacts" section with the report generated by Allure.

<img width="1640" alt="image" src="https://github.com/user-attachments/assets/5877b626-ecfa-4699-b4b7-eb1150773565" />
<img width="1664" alt="image" src="https://github.com/user-attachments/assets/68af3ea2-0ae3-4dbd-b100-760c38d68c6e" />

To see that report locally, after downloading the artifacts, in the terminal of your computer, enter the report's folder and paste ```python3 -m http.server 8000``` (python is required for this), then in your browser go to ```http://localhost:8000/``` where the report can be seen

<img width="497" alt="image" src="https://github.com/user-attachments/assets/e1b238a0-7836-4afe-add6-8b092bdeb9aa" />


## Analysis and Test Report

#### Test Execution Status
- **Test Suite:** User flow tests
- **Total Tests Executed:** 1 (For 5 different browsers: Web: Chromium, Firefox, Webkit | Mobile: Chrome, Safari )
- **Tests Passed:** 1 (For 5 different browsers: Web: Chromium, Firefox, Webkit | Mobile: Chrome, Safari )
- **Tests Failed:** - *None*
- **Skipped Tests:** - *None*
- **Date of Execution:** 01/09/2024

#### Detailed Test Results
| Test Case Name         | Status   | 
|------------------------|-----------|
| TC-001 User flow: Purchase a Product |  Passed   | 

![test report](https://github.com/user-attachments/assets/2c86d390-4c98-4f13-98f3-a203fa69b889)

#### Issues or Failures Encountered
- No issues or failures were encountered during test execution.

#### Aditional Evidence
[test execution.webm](https://github.com/user-attachments/assets/ac5d1195-93d3-49eb-a1d0-fca7aabd5bc4)

## Automation standards

### Writing tests

#### Test Structure

- `test()`: It is used to define a specific test case.
- `test.describe()`: It is used to group some test cases that are related to a specific feature or behavior.

#### POM structure

Write methods on the Page Object class to call them on the test, for example:

```javascript
 constructor(page) {
  this.page = page;
    // Selectors
       this.searchProductInput = page.locator('#search_product');
  }
  async searchProduct(product) {
    await this.searchProductInput.fill(product);
  }
```

Than call them from the test() step on your feature scenario (test.describe()) for cleaner code:

```javascript
test('Search for a Product', async () => {
  await this.searchProduct('tshirt');
  );
```

### Engineering standards

- [Coding Standards](https://www.w3schools.com/js/js_best_practices.asp)
- [Page Object Model Guide](https://playwright.dev/docs/pom)

### Formatting

- Use semicolons.
- No more than 150 characters on a single line.
- Use single quotes.
- For single-line comments, use `// This is a comment.`

### Naming Conventions

- Use `lowerCamelCase` for _variables_, _properties_ and _function_ names.
- Use `UpperCamelCase` for _class names_.
- Use `kebab-case` for _files_ and _folder_ names.

## Known issues

* https://automationexercise.com/ has Google ads that can block the tests if not handled.

## Tools and technologies
- Playwright
- JavaScript
- Allure Reports
- GitHub Actions
- Faker JS
