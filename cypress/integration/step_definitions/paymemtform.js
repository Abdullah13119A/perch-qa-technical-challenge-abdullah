import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import PaymentPage from '../../pages/PaymentForm';

Given('I am on the payment page', () => {
  PaymentPage.visit();
});

When('I enter valid payment details', () => {
  PaymentPage.fillPaymentForm({
    cardHolder: 'John Doe',
    cardNumber: '4111111111111111', // Example Visa test number
    expiryDate: '12/25',
    cvv: '123'
  });
});

When('I click the place order button', () => {
  PaymentPage.clickPlaceOrder();
});

Then('the order should be placed successfully', () => {
  // Example assertion: adjust based on app behavior
  cy.url().should('include', '/confirmation');
  cy.contains('Thank you for your order').should('be.visible'); // if applicable
});
