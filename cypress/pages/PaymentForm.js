class PaymentPage {
  elements = {
    cardHolder: () => cy.get('[data-testid="cardholder-input"]'),
    cardNumber: () => cy.get('[data-testid="card-number-input"]'),
    expiryDate: () => cy.get('[data-testid="expiry-input"]'),
    cvv: () => cy.get('[data-testid="cvv-input"]'),
    placeOrderButton: () => cy.get('[data-testid="complete-payment"]')
  };

  visit() {
    cy.visit('/checkout/payment'); // Adjust route if needed
  }

  fillPaymentForm({ cardHolder, cardNumber, expiryDate, cvv }) {
    this.elements.cardHolder().type(cardHolder);
    this.elements.cardNumber().type(cardNumber);
    this.elements.expiryDate().type(expiryDate);
    this.elements.cvv().type(cvv);
  }

  clickPlaceOrder() {
    this.elements.placeOrderButton().click();
  }
}

export default new PaymentPage();
