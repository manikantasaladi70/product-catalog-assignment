// product-tests.cy.js
describe('Product Catalog E2E', () => {
  const baseUrl = 'http://localhost:4200';

  beforeEach(() => {
    // Visit the app before each test
    cy.visit(baseUrl);

    // Wait for product cards to render
    cy.get('[data-cy="product-card"]', { timeout: 5000 })
      .should('have.length', 5);
  });

  it('displays 5 products on initial load', () => {
    cy.get('[data-cy="product-card"]').should('have.length', 5);
  });

  it('filters products from search bar', () => {
    cy.get('[data-cy="search-bar"]').clear().type('mou');
    cy.contains('Wireless Mouse').should('be.visible');
    cy.contains('Mechanical Keyboard').should('not.exist');
  });

  it('opens product modal with correct details', () => {
    cy.contains('Wireless Mouse').click();
    cy.get('[data-cy="product-modal"]').should('be.visible');

    cy.get('[data-cy="product-modal"]').within(() => {
      cy.contains('Wireless Mouse').should('exist');
      cy.contains('₹25').should('exist');
      cy.get('#modalDesc').should('not.be.empty');
    });
  });

  it('closes the modal', () => {
    cy.contains('Wireless Mouse').click();
    cy.get('[data-cy="product-modal"]').should('be.visible');
    cy.get('[data-cy="close-button"]').click();
    cy.get('[data-cy="product-modal"]').should('not.be.visible');
  });
});
