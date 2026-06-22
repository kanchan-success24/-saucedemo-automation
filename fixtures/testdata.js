const testData = {
  // Valid data
  url: 'https://www.saucedemo.com',
  username: 'standard_user',
  password: 'secret_sauce',

  // Checkout data
  firstName: 'Test',
  lastName: 'User',
  postalCode: '12345',

  // Invalid data 
  invalidUsername: 'wrong_user',
  invalidPassword: 'wrong_pass',

   lockedUsername: 'locked_out_user',  // ← ADD KIYA
}

module.exports = { testData }