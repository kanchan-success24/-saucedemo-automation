const { test, expect } = require('@playwright/test')
const { doLogin } = require('../utils/loginHelper')
const { ProductsPage } = require('../pages/ProductsPage')
const { CartPage } = require('../pages/CartPage')

test('Remove item from cart', async ({ page }) => {

  // Step 1: Login karo
  await doLogin(page)

  // Step 2: Product add karo
  const productsPage = new ProductsPage(page)
  await productsPage.addToCart()
  await productsPage.goToCart()

  // Step 3: Cart pe jao aur remove karo
  const cartPage = new CartPage(page)
  await cartPage.removeButton.click()

  // Step 4: Check karo - cart empty hai?
  await expect(cartPage.removeButton).not.toBeVisible()
})