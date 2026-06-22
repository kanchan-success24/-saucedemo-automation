const { test, expect } = require('@playwright/test')
const { doLogin } = require('../utils/loginHelper')
const { ProductsPage } = require('../pages/ProductsPage')
const { testData } = require('../fixtures/testdata')



test('product details page', async ({page}) =>{

    await doLogin(page)

    const productsPage=new ProductsPage(page)

    await productsPage.clickProductName()

    await expect(page).toHaveURL(/inventory-item.html/)


})