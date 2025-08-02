import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import SuccessPage from '../../pages/OrderSuccess';

Given('I am on the order success page', () => {
  SuccessPage.visit();
});

Then('I should see a thank you message', () => {
  SuccessPage.verifySuccessMessage();
});

Then('I should see an order number', () => {
  SuccessPage.verifyOrderNumberVisible();
});

Then('I should see options to continue shopping or view orders', () => {
  SuccessPage.verifyActionButtons();
});
