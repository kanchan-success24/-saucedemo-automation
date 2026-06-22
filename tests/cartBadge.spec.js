const { test, expect } = require('@playwright/test')
const { doLogin } = require('../utils/loginHelper')
const { ProductsPage } = require('../pages/ProductsPage')

test('Cart badge shows 2 items', async ({ page }) => {

  // Step 1: Login karo
  await doLogin(page)

  // Step 2: Page object banao
  const productsPage = new ProductsPage(page)

  // Step 3: Pehla product add karo
  await productsPage.addToCart()

  // Step 4: Dusra product add karo
  await productsPage.addBikeLightToCart()

  // Step 5: Check karo - badge pe "2" hai?
  await expect(productsPage.cartBadge).toHaveText('2')
})