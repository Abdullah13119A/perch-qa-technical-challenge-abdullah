
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';

Given('I am on the homepage', () => {
  HomePage.visit();
});

When('I click {string} on the product card for {string}', (buttonText, productName) => {
  if (buttonText === 'View Details') {
    HomePage.clickViewDetails(productName);
  }
});
When('I select quantity {string}', (quantity) => {
    CartPage.selectQuantity(quantity);
});
And('I click proceed to checkout', () => {
    CartPage.proceedToCheckoutButton();
});
Then('I click to back to cart', () => {
    CartPage.backButton();
});
Then('I click to remove the product from the cart', () => {
    CartPage.removeFromCartButton();
});
Then('I should see an empty cart message', () => {
    CartPage.verifyEmptyCartMessage();
});
