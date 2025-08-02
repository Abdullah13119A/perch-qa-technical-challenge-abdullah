class AddressPage {
  elements = {
    firstName: () => cy.get('[data-testid="firstname-input"]'),
    email: () => cy.get('[data-testid="email-input"]'),
    phone: () => cy.get('[data-testid="phone-input"]'),
    street: () => cy.get('[data-testid="street-input"]'),
    city: () => cy.get('[data-testid="city-input"]'),
    state: () => cy.get('[data-testid="state-input"]'),
    zipCode: () => cy.get('[data-testid="zipcode-input"]'),
    country: () => cy.get('[data-testid="country-input"]'),
    continueButton: () => cy.get('[data-testid="continue-to-payment"]')
  };

  visit() {
    // Update this path if your route is different
    cy.visit('/checkout/address');
  }

  fillForm({ firstName, email, phone, street, city, state, zipCode, country }) {
    this.elements.firstName().type(firstName);
    this.elements.email().type(email);
    this.elements.phone().type(phone);
    this.elements.street().type(street);
    this.elements.city().type(city);
    this.elements.state().type(state);
    this.elements.zipCode().type(zipCode);
    this.elements.country().type(country);
  }

  clickContinue() {
    this.elements.continueButton().click();
  }
}

export default new AddressPage();
