Feature: Product Navigation Scenario

  Scenario: User starts from the product card and views details
    Given I am on the homepage
    When I click "View Details" for "Premium Leather Watch"
    Then I should see the product titled "Premium Leather Watch" and validate details
    Then I should validate details of product

  Scenario: User selects quantity and adds product to cart
     Given I am on the homepage
    When I click "View Details" for "Premium Leather Watch"
    Then I should see the product titled "Premium Leather Watch" and validate details
    And I click the add to cart button
    Then the product should be added to the cart

  Scenario: User navigates back to product catalog
    Given I am on the homepage
    When I click "View Details" for "Premium Leather Watch"
    When I click the back to products button
    Then I should be taken back to the homepage