const { LoginPage } = require('../pages/LoginPage')
const { testData } = require('../fixtures/testdata')

async function doLogin(page) {
  const loginPage = new LoginPage(page)
  await loginPage.goto(testData.url)
  await loginPage.login(testData.username, testData.password)
}

module.exports = { doLogin }