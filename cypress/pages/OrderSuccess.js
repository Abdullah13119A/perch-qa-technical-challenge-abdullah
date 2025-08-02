class SuccessPage {
  elements = {
    successPage: () => cy.get('[data-testid="success-page"]'),
    thankYouMessage: () => cy.contains('Thank You for Your Purchase!'),
    orderNumber: () => cy.get('[data-testid="order-number"]'),
    continueShoppingBtn: () => cy.get('[data-testid="continue-shopping"]'),
    viewOrdersBtn: () => cy.get('[data-testid="view-orders"]')
  };

  visit() {
    cy.visit('/checkout/success'); // Adjust path if needed
  }

  verifySuccessMessage() {
    this.elements.thankYouMessage().should('be.visible');
  }

  verifyOrderNumberVisible() {
    this.elements.orderNumber().should('be.visible').and('contain', '#');
  }

  verifyActionButtons() {
    this.elements.continueShoppingBtn().should('be.visible');
    this.elements.viewOrdersBtn().should('be.visible');
  }
}

export default new SuccessPage();
