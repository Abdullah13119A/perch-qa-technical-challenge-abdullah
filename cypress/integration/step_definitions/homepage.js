import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';

Given('I am on the homepage', () => {
    HomePage.visit();
});

Then('I should see the main content', () => {
    HomePage.verifyMainContent();
});

Then('I should see the full list of products', () => {
    HomePage.verifyProductsGrid();
});

When('I click the profile button', () => {
    HomePage.clickProfileButton();
});

Then('I should be redirected to the profile page', () => {
    cy.url().should('include', '/profile'); // adjust if route differs
});

Given('I click "View Details" for {string}', (productName) => {
    HomePage.clickViewDetails(productName);
}); 

When('I click the cart button', () => {
    HomePage.clickCartButton();
});

Then('I should be redirected to the cart page', () => {
    cy.url().should('include', '/cart'); // adjust if route differs
});

When('I search for {string}', (query) => {
    HomePage.searchForProduct(query);
});

When('I click the sort by price button', () => {
    HomePage.clickSortByPrice();
});

Then('the products should be sorted by price ascending', () => {
    HomePage.verifyProductsSortedByPriceAsc();
});

When('I click on {string} for {string}', (buttonText, productName) => {
    HomePage.clickViewDetails(productName);
});

Then('I should be taken to the detail page for {string}', (productName) => {
    cy.contains('h1', productName).should('be.visible');
});
