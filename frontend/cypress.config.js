const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
  },
});
