/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('Home - Should have banners', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[class^="Banner_name"]').contains('Spider Man')
    cy.get('div[class^="Banner_name"]').contains('Captain Marvel')
    cy.get('div[class^="Banner_name"]').contains('LOKI')
  })
})