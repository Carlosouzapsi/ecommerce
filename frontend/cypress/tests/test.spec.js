/// <reference types="cypress" />

describe('app is online', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="header-title"]').should('exist').contains('SHOPPER');
  });
});
