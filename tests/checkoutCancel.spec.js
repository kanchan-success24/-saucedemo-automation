const { test, expect } = require('@playwright/test')
const { doLogin } = require('../utils/loginHelper')
const { ProductsPage } = require('../pages/ProductsPage')
const { CartPage } = require('../pages/CartPage')
const { CheckoutPage } = require('../pages/CheckoutPage')

test('Verify user can cancel checkout', async ({ page }) => {

  // Step 1: Login karo
  await doLogin(page)

  // Step 2: Page objects banao
  const productsPage = new ProductsPage(page)
  const cartPage = new CartPage(page)
  const checkoutPage = new CheckoutPage(page)

  // Step 3: Product cart me add karo
  await productsPage.addToCart()

  // Step 4: Cart open karo
  await productsPage.goToCart()

  // Step 5: Checkout button par click karo
  await cartPage.clickCheckout()

  // Step 6: Checkout page par Cancel button click karo
  await checkoutPage.clickCancel()

  // Step 7: Verify user inventory page par redirect ho gaya
  await expect(page).toHaveURL(/cart.html/)
})