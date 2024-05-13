const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Base URL for the backend
  backendUrl: "http://localhost:4000",

  // Base URL for the frontend
  // Additional Cypress configuration options
  // ...
  frontendUrl: "http://localhost:8080",

  e2e: {
    baseUrl: "http://localhost:8080",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
