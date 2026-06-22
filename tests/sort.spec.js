const { test, expect } = require('@playwright/test')
const { doLogin } = require('../utils/loginHelper')
const { ProductsPage } = require('../pages/ProductsPage')

test('Sort Z to A', async ({ page }) => {

  // Step 1: Login karo
  await doLogin(page)

  // Step 2: Sort karo
  const productsPage = new ProductsPage(page)
  await productsPage.sortBy('za')

  // Step 3: Check karo - pehla product sahi hai?
  await expect(productsPage.firstProductName)
        .toHaveText('Test.allTheThings() T-Shirt (Red)')
})