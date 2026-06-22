class LoginPage {
  constructor(page) {
    this.page = page

     // Login elements
    this.usernameInput = page.locator('[data-test="username"]')
    this.passwordInput = page.locator('[data-test="password"]')
    this.loginButton = page.locator('[data-test="login-button"]')



    // Logout elements 
    this.hamburgerMenu = page.locator('#react-burger-menu-btn')
    this.logoutButton = page.locator('#logout_sidebar_link')


    this.loginButton = page.locator('#login-button')
    this.errorMessage = page.locator('[data-test="error"]')//....
  
  }

  async goto(url) {
    await this.page.goto(url)
  }

  async login(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
    
  }

    // Logout karo
  async logout() {
    await this.hamburgerMenu.click()
    await this.logoutButton.click()
  }

    async clickLogin() {
    await this.loginButton.click()
    }//.....
}

module.exports = { LoginPage }