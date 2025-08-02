Feature: Cart Page Scenario

  Scenario: User selects quantity and adds product to cart and make an order success
     Given I am on the homepage
    When I click "View Details" for "Premium Leather Watch"
    Then I should see the product titled "Premium Leather Watch" and validate details
    And I click the add to cart button
    Then the product should be added to the cart
    When I select quantity "3"
    And I click proceed to checkout
    Then I click to back to cart
    Then I click to remove the product from the cart
    Then I should see an empty cart message
    Given I am on the delivery address form page
    When I fill in the delivery form with valid data
    And I click the continue to payment button
    Then I should be redirected to the payment page
    Given I am on the payment page
    When I enter valid payment details
    And I click the place order button
    Given I am on the order success page
    Then I should see a thank you message
    And I should see an order number
    And I should see options to continue shopping or view orders