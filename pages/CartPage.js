class CartPage {
  constructor(page) {
    this.page = page

    // 1. Product name link
    this.productName = page.locator('[data-test="inventory-item-name"]')

    // 2. Remove button
    this.removeButton = page.locator('#remove-sauce-labs-backpack')

    // 3. Continue Shopping button
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')

    // 4. Checkout button
    this.checkoutButton = page.locator('[data-test="checkout"]')
  }

  // Product detail pe jao
  async clickProductName() {
    await this.productName.click()
  }

  // Item remove karo
  async removeItem() {
    await this.removeButton.click()
  }

  // Wapas products pe jao
  async continueShopping() {
    await this.continueShoppingButton.click()
  }

  // Checkout pe jao
  async clickCheckout() {
  await this.checkoutButton.click()
  }
}

module.exports = { CartPage }