import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import ProfilePage from '../../pages/ProfilePage';

Given('I am on the profile page', () => {
  ProfilePage.visit();
});

Then('I should see my name as {string}', (name) => {
  ProfilePage.verifyName(name);
});

Then('I should see my email as {string}', (email) => {
  ProfilePage.verifyEmail(email);
});

Then('I should see an Edit Profile button', () => {
  ProfilePage.verifyEditButtonVisible();
});
Given('I am on the editable profile page', () => {
  ProfilePage.visit();
});

When('I update my name to {string}', (name) => {
  ProfilePage.enterName(name);
});

When('I update my email to {string}', (email) => {
  ProfilePage.enterEmail(email);
});

When('I click {string}', (buttonLabel) => {
  if (buttonLabel === 'Save Changes') {
    ProfilePage.saveChanges();
  }
  // You can add support for "Cancel" if needed
});

Then('I should see the updated name as {string}', (name) => {
  ProfilePage.verifyUpdatedName(name);
});

Then('I should see the updated email as {string}', (email) => {
  ProfilePage.verifyUpdatedEmail(email);
});