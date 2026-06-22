class OrderCompletePage {
  constructor(page) {
    this.page = page

    // "Thank you" header
    this.completeHeader = page.locator('[data-test="complete-header"]')

    // Back to Home button
    this.backToHomeButton = page.locator('#back-to-products')
  }

  // Order complete hua? Check karo
  async isOrderComplete() {
    return await this.completeHeader.isVisible()
  }

  // Header text lo
  async getHeaderText() {
    return await this.completeHeader.textContent()
  }

  // Wapas products pe jao
  async backToHome() {
    await this.backToHomeButton.click()
  }
}

module.exports = { OrderCompletePage }