
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import ProductDetailPage from '../../pages/ProductDetail';

Given('I am on the homepage', () => {
  HomePage.visit();
});

When('I click {string} on the product card for {string}', (buttonText, productName) => {
  if (buttonText === 'View Details') {
    HomePage.clickViewDetails(productName);
  }
});

Then('I should be on the product detail page for {string}', (productName) => {
  ProductDetailPage.verifyProductName(productName);
});

Then('I should see the product price as {string}', (price) => {
  ProductDetailPage.verifyProductPrice(price);
});
Then('I should see the product titled {string} and validate details', (productName) => {
    HomePage.verifyProductVisible(productName);
     cy.get('[data-testid="product-image"]')
    .should('be.visible')
    .and('have.attr', 'src')
    .and('include', 'https://images.unsplash.com/photo-1524805444758-089113d48a6d');

});
Then('I should validate details of product', () => {
  cy.get('[data-testid="product-image"]')
    .should('have.attr', 'alt', 'Premium Leather Watch');

  cy.get('[data-testid="product-name"]')
    .should('be.visible')
    .and('have.text', 'Premium Leather Watch');

  cy.get('[data-testid="product-price"]')
    .should('be.visible')
    .and('contain', '$149.99')
    .and('have.attr', 'aria-label', 'Price: $149.99');
});
When('I click the add to cart button', () => {
    ProductDetailPage.clickAddToCart();
});

Then('I should see the product description', () => {
  ProductDetailPage.verifyDescriptionVisible();
});

Then('the product should be added to the cart', () => {
    // Placeholder: simulate confirmation or check cart state
    cy.url().should('include', '/cart'); // still on product page for now
    // In real app: check cart badge, toast, or API call
});

Then('I should see the product image', () => {
  ProductDetailPage.verifyImageVisible();
});

When('I click the back to products button', () => {
    ProductDetailPage.clickBackButton();
});

Then('I should be taken back to the homepage', () => {
    cy.url().should('include', `/`)
});

