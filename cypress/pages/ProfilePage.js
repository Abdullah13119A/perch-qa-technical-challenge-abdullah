class ProfilePage {
  elements = {
    name: () => cy.get('[data-testid="profile-name"]'),
    email: () => cy.get('[data-testid="profile-email"]'),
    editButton: () => cy.get('[data-testid="edit-profile"]'),
    nameInput: () => cy.get('[data-testid="profile-name-input"]'),
    emailInput: () => cy.get('[data-testid="profile-email-input"]'),
    saveButton: () => cy.get('[data-testid="save-profile"]'),
    cancelButton: () => cy.get('[data-testid="cancel-edit"]')
  };

  visit() {
    cy.visit('/profile'); // Adjust the path as needed
  }

  verifyName(name) {
    this.elements.name().should('be.visible').and('have.text', name);
  }

  verifyEmail(email) {
    this.elements.email().should('be.visible').and('have.text', email);
  }

  verifyEditButtonVisible() {
    this.elements.editButton().should('be.visible').and('contain', 'Edit Profile').click();
  }
    enterName(name) {
    this.elements.nameInput().clear().type(name);
  }

  enterEmail(email) {
    this.elements.emailInput().clear().type(email);
  }

  saveChanges() {
    this.elements.saveButton().click();
  }

  verifyUpdatedName(name) {
    this.elements.nameInput().should('have.value', name);
  }

  verifyUpdatedEmail(email) {
    this.elements.emailInput().should('have.value', email);
  }
}

export default new ProfilePage();
