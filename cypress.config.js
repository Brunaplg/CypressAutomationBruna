const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //comment baseUrl due to multiple pages tested on same project
    //baseUrl: 'https://formy-project.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

