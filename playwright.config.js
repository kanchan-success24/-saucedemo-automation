const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
// ========================================
// TESTS FOLDER
// ========================================
testDir: './tests',

// ========================================
// PARALLEL EXECUTION
// ========================================
fullyParallel: false,

// ========================================
// RETRIES
// ========================================
retries: 0,

// ========================================
// WORKERS
// ========================================
workers: 1,

// ========================================
// REPORTERS
// ========================================
reporter: [
['html'],
['allure-playwright'],
],

// ========================================
// COMMON SETTINGS
// ========================================
use: {
// GitHub Actions (CI) -> Headless
// Local machine -> Browser visible
headless: process.env.CI ? true : false,


// Slow execution only on local
launchOptions: {
  slowMo: process.env.CI ? 0 : 1000,
},

// Screenshot on failure
screenshot: 'only-on-failure',

// Video on failure
video: 'retain-on-failure',

// Trace on first retry
trace: 'on-first-retry',


},

// ========================================
// BROWSERS
// ========================================
projects: [
{
name: 'chromium',
use: {
...devices['Desktop Chrome'],
},
},


// Uncomment if needed
// {
//   name: 'firefox',
//   use: { ...devices['Desktop Firefox'] },
// },

// {
//   name: 'webkit',
//   use: { ...devices['Desktop Safari'] },
// },


],
});
