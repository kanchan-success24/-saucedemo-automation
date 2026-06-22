const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  // ========================================
  // TESTS FOLDER — kahan hain test files?
  // ========================================
  testDir: './tests',

  // ========================================
  // PARALLEL — ek saath kitne tests chalenge?
  // false = ek ek karke chalenge (beginner ke liye achha)
  // true  = sab ek saath chalenge (fast hota hai)
  // ========================================
  fullyParallel: false,

  // ========================================
  // RETRIES — fail hone pe kitni baar try kare?
  // 0 = dobara mat try karo
  // 2 = 2 baar aur try karo
  // ========================================
  retries: 0,

  // ========================================
  // WORKERS — ek saath kitne browsers chalenge?
  // 1 = sirf ek browser (clearly dikhega)
  // 3 = teen browsers ek saath
  // ========================================
  workers: 1,

  // ========================================
  // REPORTER — report kaunsi format mein?
  // 'html' = browser mein sundar report
  // 'list' = terminal mein simple list
  // ========================================
  
 reporter: [
  ['html'],
  ['allure-playwright']
],

  use: {
    // ========================================
    // HEADLESS — browser dikhega ya nahi?
    // false = browser dikhega (sikhne ke liye)
    // true  = browser nahi dikhega (fast hota hai)
    // ========================================
    headless: false,
    launchOptions:{
      slowMo:1000,
    },

    // ========================================
    // SCREENSHOT — kab screenshot le?
    // 'only-on-failure' = sirf fail hone pe
    // 'on'              = har baar
    // 'off'             = kabhi nahi
    // ========================================
    screenshot: 'only-on-failure',

    // ========================================
    // VIDEO — kab video record kare?
    // 'retain-on-failure' = sirf fail hone pe save karo
    // 'on'                = har baar
    // 'off'               = kabhi nahi
    // ========================================
    video: 'retain-on-failure',

    // ========================================
    // TRACE — debugging ke liye
    // 'on-first-retry' = retry pe trace karo
    // 'on'             = har baar
    // 'off'            = kabhi nahi
    // ========================================
    trace: 'on-first-retry',
  },

  // ========================================
  // PROJECTS — kaunse browsers mein test karna hai?
  // Abhi sirf Chrome — baad mein aur add kar sakte ho
  // ========================================
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      // Chrome mein test karo
    },

    // Firefox add karna ho toh uncomment karo:
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // Safari add karna ho toh uncomment karo:
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});