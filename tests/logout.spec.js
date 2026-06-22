const { test, expect } = require('@playwright/test')
const { doLogin } = require('../utils/loginHelper')
const { LoginPage } = require('../pages/LoginPage')
const { testData } = require('../fixtures/testdata')

test('Logout test', async ({ page }) => {

  // Step 1: Login karo
  await doLogin(page)

  // Step 2: Logout karo
  const loginPage = new LoginPage(page)
  await loginPage.logout()

  // Step 3: Check karo
  // Login page wapas aaya?
  await expect(page).toHaveURL(testData.url)
})