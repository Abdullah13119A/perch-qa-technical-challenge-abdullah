class CartPage {
  elements = {
        page: () => cy.get('[data-testid="product-detail-page"]'),
        name: () => cy.get('[data-testid="product-name"]'),
        price: () => cy.get('[data-testid="product-price"]'),
        description: () => cy.get('[data-testid="product-description"]'),
        image: () => cy.get('[data-testid="product-image"]'),
        quantitySelector: () => cy.get('[data-testid="quantity-2"]'),
        addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),
        backButton: () => cy.get('[data-testid="back-to-cart"]'),
        proceedToCheckoutButton: () => cy.get('[data-testid="proceed-to-checkout"]'),
        removeFromCartButton: () => cy.get('[data-testid="remove-2"]'),
        emptyCartMessage: () => cy.get('[data-testid="empty-cart"] p')
    }

  verifyDescriptionVisible() {
        this.elements.description().should('be.visible');
    }

    verifyImageVisible() {
        this.elements.image().should('be.visible');
    }

    selectQuantity(value) {
        this.elements.quantitySelector().select(value);
    }
    proceedToCheckoutButton() {
        this.elements.proceedToCheckoutButton().click();
    }
    backButton() {
        this.elements.backButton().click();
    }
    removeFromCartButton() {
        this.elements.removeFromCartButton().click();
    }
    verifyEmptyCartMessage() {
        this.elements.emptyCartMessage().should('contain.text', 'Your cart is empty'); 
    }

}

export default new CartPage();



