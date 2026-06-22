  class CheckoutPage {
    constructor(page) {
      this.page = page

      // Step 1 - Form fields
      this.firstNameInput = page.locator('#first-name')
      this.lastNameInput = page.locator('#last-name')
      this.postalCodeInput = page.locator('#postal-code')

      // Step 1 - Buttons
      this.continueButton = page.locator('#continue')
      this.cancelButton = page.locator('[data-test="cancel"]')

      // Step 2 - Overview
      this.productName = page.locator('[data-test="inventory-item-name"]')
      this.finishButton = page.locator('#finish')

    
      // Cancel button locator
      this.cancelButton = page.locator('[data-test="cancel"]');
    }

    // Step 1 - Form fill karo
    async fillDetails(firstName, lastName, postalCode) {
      await this.firstNameInput.fill(firstName)
      await this.lastNameInput.fill(lastName)
      await this.postalCodeInput.fill(postalCode)
    }

    // Step 1 - Continue click karo
    async clickContinue() {
      await this.continueButton.click()
    }

    // Step 1 - Cancel click karo
    async clickCancel() {
      await this.cancelButton.click()
    }

    // Step 2 - Finish click karo
    async clickFinish() {
      await this.finishButton.click()
    }
  }

  module.exports = { CheckoutPage }