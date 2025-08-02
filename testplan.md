# 🧪 E-Commerce Application Test Plan

## Overview

This test plan outlines the end-to-end functional test coverage for key flows in the e-commerce web application using Cypress with Cucumber (BDD).

---

## ✅ Scope

This plan covers:

- Homepage navigation
- Product details view
- Address form submission
- Payment form submission
- Order success confirmation
- Profile information display
- Profile information editing

---

## 🧩 Features & Scenarios

### 1. Homepage Navigation

**Feature:** `Homepage Navigation`

#### Scenario:
- Given I am on the homepage  
- Then I should see the main content  
- And I should see the full list of products  

---

### 2. Product Detail Navigation

**Feature:** `Product Navigation Scenario`

#### Scenario:
- Given I am on the homepage  
- When I click "View Details" for "Premium Leather Watch"  
- Then I should see the product titled "Premium Leather Watch" and validate details  
- Then I should validate details of product  

---

### 3. Address Form Submission

**Feature:** `Address Entry Form`

#### Scenario:
- Given I am on the address form page  
- When I fill in valid address details  
- And I click "Continue to Payment"  
- Then I should be redirected to the payment form  

---

### 4. Payment Information Submission

**Feature:** `Payment Submission`

#### Scenario:
- Given I am on the payment form page  
- When I enter valid card details  
- And I click "Place Order"  
- Then I should see a successful order confirmation  

---

### 5. Order Success Page

**Feature:** `Order Confirmation`

#### Scenario:
- Given I placed an order  
- Then I should see the success message  
- And I should see an order number  
- And I should see "Continue Shopping" and "View Your Orders" buttons  

---

### 6. Profile View

**Feature:** `Profile Page`

#### Scenario:
- Given I am on the profile page  
- Then I should see my name as "John Doe"  
- And I should see my email as "john.doe@example.com"  
- And I should see an Edit Profile button  

---

### 7. Edit Profile

**Feature:** `Edit Profile Information`

#### Scenario:
- Given I am on the editable profile page  
- When I update my name to "Jane Smith"  
- And I update my email to "jane.smith@example.com"  
- And I click "Save Changes"  
- Then I should see the updated name as "Jane Smith"  
- And I should see the updated email as "jane.smith@example.com"  

---

## ⚙️ Tools & Frameworks

- **Cypress**: Front-end automation
- **Cucumber**: BDD syntax
- **JavaScript (ES6+)**: Test scripting
- **Page Object Model (POM)**: For maintainable codebase

---

## 🧪 Test Execution Strategy

- Each scenario is independently executable.
- Uses realistic selectors via `data-testid` attributes.
- Supports CI/CD integration for scheduled test runs.

---

## ✅ Acceptance Criteria

- All UI elements are visible and interactable.
- Navigations lead to expected screens.
- Data input reflects in UI/state accurately.
- Success pages display meaningful confirmation messages.
- Form validation and state preservation (where applicable) work correctly.

---

## 📌 Test Data Notes

| Field         | Sample Value                |
|---------------|-----------------------------|
| Product Name  | Premium Leather Watch       |
| Email         | jane.smith@example.com      |
| Address       | 123 Main St, New York       |
| Card Number   | 4111 1111 1111 1111         |
| Expiry        | 12/26                       |
| CVV           | 123                         |

---

## 🚧 Future Enhancements

- Add negative test cases for invalid forms
- Add tests for cancel profile editing
- Mock API responses for deterministic behavior
- Add responsiveness & cross-browser checks

---
