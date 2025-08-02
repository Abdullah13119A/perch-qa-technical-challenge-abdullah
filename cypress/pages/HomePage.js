// class HomePage {
//     elements = {
//         mainContent: () => cy.get('[data-testid="home-page"]'),
//         productsGrid: () => cy.get('.products-grid')
//     }

//     visit() {
//         cy.visit('/');
//     }

//     verifyMainContent() {
//         this.elements.mainContent().should('be.visible');
//     }

//     verifyProductsGrid() {
//         this.elements.productsGrid().should('be.visible');
//     }
// }
 
// export default new HomePage();
class HomePage {
    elements = {
        mainContent: () => cy.get('[data-testid="home-page"]'),
        productsGrid: () => cy.get('.products-grid'),
        profileButton: () => cy.get('[data-testid="nav-to-profile"]'),
        cartButton: () => cy.get('[data-testid="nav-to-cart"]'),
        searchInput: () => cy.get('[data-testid="product-search"]'),
        sortButton: () => cy.get('[data-testid="sort-price"]'),
        productCardByName: (name) => cy.contains('.product-card', name),
        productTitleByName: (name) => cy.contains('.product-name', name),
        productPrices: () => cy.get('[data-testid^="price-"]'),
         mainContent: () => cy.get('[data-testid="home-page"]'),
        productsGrid: () => cy.get('.products-grid'),
        viewDetailsButtonFor: (productName) => cy.contains('.product-card', productName).find('button').contains('View Details'),    
    }

    visit() {
        cy.visit('/');
    }

    verifyMainContent() {
        this.elements.mainContent().should('be.visible');
    }

    verifyProductsGrid() {
        this.elements.productsGrid().should('be.visible');
    }

    clickProfileButton() {
        this.elements.profileButton().click();
    }

    clickCartButton() {
        this.elements.cartButton().click();
    }

    searchForProduct(query) {
        this.elements.searchInput().clear().type(query);
    }

    clickSortByPrice() {
        this.elements.sortButton().click();
    }

    clickViewDetails(productName) {
        this.elements.productCardByName(productName).find('button').contains('View Details').click();
    }

    verifyProductVisible(productName) {
        this.elements.productTitleByName(productName).should('be.visible');
    }

    verifyProductsSortedByPriceAsc() {
        this.elements.productPrices().then(($prices) => {
            const parsed = [...$prices].map(p => parseFloat(p.innerText.replace('$', '')));
            const sorted = [...parsed].sort((a, b) => a - b);
            expect(parsed).to.deep.equal(sorted);
        });
    }

    verifyMainContent() {
    this.elements.mainContent().should('be.visible');
  }

  verifyProductsGrid() {
    this.elements.productsGrid().should('be.visible');
  }

  clickViewDetails(productName) {
    this.elements.viewDetailsButtonFor(productName).click();
  }
}

export default new HomePage();
