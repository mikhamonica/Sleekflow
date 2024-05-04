const { defineConfig } = require("cypress");

module.exports = defineConfig({

    viewportHeight:960,
    viewportWidth :1536,

    reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
