import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AddressPage from '../../pages/AddressPage';

Given('I am on the delivery address form page', () => {
  AddressPage.visit();
});

When('I fill in the delivery form with valid data', () => {
  AddressPage.fillForm({
    firstName: 'John',
    email: 'john@example.com',
    phone: '1234567890',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA'
  });
});

When('I click the continue to payment button', () => {
  AddressPage.clickContinue();
});

Then('I should be redirected to the payment page', () => {
  cy.url().should('include', '/checkout/payment'); // Adjust if your route is different
});
