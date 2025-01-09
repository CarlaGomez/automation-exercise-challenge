# QA Engineer Skill Test: Web Automation README

## Overview
This project focuses on automating a given user flow using Playwright. The deliverables include the test case design, automation script development, execution of tests, and reporting of results. 

## Framework Selection

### Chosen Framework: Playwright

### Justification:
- **Ease of Use:** Playwright offers an intuitive and straightforward syntax that simplifies the learning curve for testers, enabling quick adoption and efficient test creation.
  
- **Community Support:** Playwright boasts a robust and active community, providing regular updates, extensive documentation, and a wealth of shared resources. This ensures prompt resolution of issues and continuous improvements, making it easier for testers to find solutions and stay up to date with best practices.

- **Testing Features**: Rich built-in features such as automatic waiting, cross-browser testing, and support for modern web applications. Usually web pages like this one require hovers, removing ad blocks, interacting with custom UI components like dropdowns, checkboxes, sliders, iframes, etc, and in the end Playwright offers more built-in capabilities and better handling of those interactions (luckily advanced interactions were not needed, but is worth it to look ahead).

    Additionally, Playwright’s cross-browser testing support was a critical factor in my decision. It allows testing across multiple browsers, including mobile-specific ones like Safari for iOS, whereas Cypress is        limited to desktop Chromium-based browsers and can only simulate mobile viewports. This simulation does not trigger actual touch events, which can be a limitation when testing mobile-specific behaviors.

- **Context:** Cypress and Playwright are both simple in terms of syntax and configuration, what made me go for Playwright at the end was the fact that Playwright is a more QA-oriented framework than Cypress, Cypress regularly is more Front-end dev-oriented, although for this test both could be easily applied.

## Test Case Design

### Test Case Document 
#### **TC-001 User Flow: Purchase a product** 



## Tools and technologies
- Playwright
- JavaScript
- Allure Reports
- Github Actions
- Faker JS

## How to run the tests locally

### Pre-requisites

* Node.js needs to be installed -> To install Node.js go to https://nodejs.org/en
* Allure needs to be installed -> instructions to be found in https://allurereport.org/docs/install/

### installation

1. Clone the repo
   ```sh
   git clone 
   ```
2. Install NPM packages: The dependencies are going to be installed (Playwright, Allure Reports, Faker.js)
   ```sh
   npm install
   ```
   or to install the same exact versions
  ```sh
   npm ci
   ```
3. Run the tests: by default they are on headless mode, to launch the browsers open the playwright.config.js file and set headless: false.
Type on the terminal:
   ```sh
    npm test
   ```
This will launch the Allure server by default aftet the tests run and the report will be visible.

## Known issues

* https://automationexercise.com/ has google ads that can block the tests if not handled.

## Automation standards

### Writing tests

#### Test Structure

- `test()`: It is used to define an specific test case.
- `test.describe()`: It is used to group some test cases that are related to an specific feature or behavior.

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
