const { test, expect } = require('@playwright/test')
const { doLogin } = require('../utils/loginHelper')
const { ProductsPage } = require('../pages/ProductsPage')
const { CartPage } = require('../pages/CartPage')
const { CheckoutPage } = require('../pages/CheckoutPage')
const { OrderCompletePage } = require('../pages/OrderCompletePage')
const { testData } = require('../fixtures/testdata')

test('Full purchase flow with 2 products', async ({page}) =>{

    await doLogin(page)

    const productsPage = new ProductsPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)
    const orderCompletePage = new OrderCompletePage(page)
    
    await productsPage.addToCart()
    await productsPage.addBikeLightToCart()
    await productsPage.goToCart()
    await cartPage.clickCheckout()  
    await checkoutPage.fillDetails(
        testData.firstName,
        testData.lastName,
        testData.postalCode
    )

    await checkoutPage.clickContinue()
    await checkoutPage.clickFinish()

    await expect(orderCompletePage.completeHeader).toHaveText('Thank you for your order!')

})