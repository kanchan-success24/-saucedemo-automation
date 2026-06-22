const { test, expect } = require('@playwright/test')
const { doLogin } = require('../utils/loginHelper')
const { ProductsPage } = require('../pages/ProductsPage')
const { CartPage } = require('../pages/CartPage')
const { CheckoutPage } = require('../pages/CheckoutPage')
const { OrderCompletePage } = require('../pages/OrderCompletePage')
const { testData } = require('../fixtures/testdata')

test('E2E - Login to Order Complete', async ({ page }) => {

  // Step 1: Login
  await doLogin(page)

  // Step 2: Product add karo
  const productsPage = new ProductsPage(page)
  await productsPage.addToCart()
  await productsPage.goToCart()

  // Step 3: Checkout click
  const cartPage = new CartPage(page)
  await cartPage.clickCheckout()

  // Step 4: Details fill karo
  const checkoutPage = new CheckoutPage(page)
  await checkoutPage.fillDetails(
    testData.firstName,
    testData.lastName,
    testData.postalCode
  )
  await checkoutPage.clickContinue()

  // Step 5: Finish
  await checkoutPage.clickFinish()

  // Step 6: Assert
  const orderCompletePage = new OrderCompletePage(page)
  await expect(orderCompletePage.completeHeader)
        .toHaveText('Thank you for your order!')
})