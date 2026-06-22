const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { testData } = require('../fixtures/testdata')

test.describe('Negative Login Tests', () => {

  test('Negative - Wrong password', async ({ page }) => {

    // Step 1: Login page pe jao
    const loginPage = new LoginPage(page)
    await loginPage.goto(testData.url)

    // Step 2: Galat password se login karo
    await loginPage.login(
      testData.username,
      testData.invalidPassword
    )

    // Step 3: Error message aaya?
    await expect(page.locator('[data-test="error"]'))
          .toBeVisible()
  })

  test('Negative - Wrong username', async ({ page }) => {

    // Step 1: Login page pe jao
    const loginPage = new LoginPage(page)
    await loginPage.goto(testData.url)

    // Step 2: Galat username se login karo
    await loginPage.login(
      testData.invalidUsername,
      testData.password
    )

    // Step 3: Error message aaya?
    await expect(page.locator('[data-test="error"]'))
          .toBeVisible()
  })

  test('Negative - Locked out user', async ({ page }) => {

    // Step 1: Login page pe jao
    const loginPage = new LoginPage(page)
    await loginPage.goto(testData.url)

    // Step 2: Locked out user se login karo
    await loginPage.login(
      testData.lockedUsername,
      testData.password
    )

    // Step 3: Error message aaya - "locked out"?
    await expect(page.locator('[data-test="error"]'))
          .toContainText('locked out')
  })

  //username pass field empty rkh kr error msg validation
  test('Negative - Empty field validation', async ({page}) => {

    const loginPage = new LoginPage(page)
    await loginPage.goto(testData.url)

    // Login button click karo
await loginPage.clickLogin();

// Verify error message
await expect(loginPage.errorMessage)
  .toHaveText('Epic sadface: Username is required');
  

  })


})