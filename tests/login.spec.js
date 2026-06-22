const { test, expect } = require('@playwright/test')
const { doLogin } = require('../utils/loginHelper')

test('Login test - saucedemo', async ({ page }) => {
  await doLogin(page)
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})