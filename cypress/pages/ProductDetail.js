class ProductDetail {
  elements = {
    name: () => cy.get('[data-testid="product-name"]'),
    price: () => cy.get('[data-testid="product-price"]'),
    description: () => cy.get('[data-testid="product-description"]'),
    image: () => cy.get('[data-testid="product-image"]'),
        quantitySelector: () => cy.get('[data-testid="quantity-selector"]'),
        addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),
        backButton: () => cy.get('[data-testid="back-to-products"]')
  };

  verifyProductName(name) {
    this.elements.name().should('have.text', name);
  }

  verifyProductPrice(price) {
    this.elements.price().should('have.text', price);
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

    clickAddToCart() {
        this.elements.addToCartButton().click();
    }

    clickBackButton() {
        this.elements.backButton().click();
    }
}

export default new ProductDetail();



