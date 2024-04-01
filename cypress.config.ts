import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1200,
  viewportHeight: 720,
  env: {
    BASE_URL: 'http://localhost:4200/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
