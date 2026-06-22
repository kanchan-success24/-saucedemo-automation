class ProductsPage {
  constructor(page) {
    this.page = page

    this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]')
    this.sortDropdown = page.locator('[data-test="product-sort-container"]')
    this.firstProductName = page.locator('[data-test="inventory-item-name"]').first()
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]')
    this.addToCartBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light')
    this.productNameLink = page.locator('[data-test="inventory-item-name"]').first()
  }

  // Backpack ko cart mein daalo
  async addToCart() {
    await this.addToCartButton.click()
  }

  // Bike Light ko cart mein daalo
  async addBikeLightToCart() {
    await this.addToCartBikeLight.click()
  }

  // Cart page pe jao
  async goToCart() {
    await this.cartIcon.click()
  }

  // Sort karo
  async sortBy(option) {
    await this.sortDropdown.selectOption(option)
  }

  // Product detail page pe jao
  async clickProductName() {
    await this.productNameLink.click()
  }
}

module.exports = { ProductsPage }