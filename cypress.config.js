const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // where Cypress should look for test specs
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // base URL used by cy.visit() in tests
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // you can register node event listeners here if needed
      return config;
    },
  },
});
