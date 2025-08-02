Feature: Homepage Navigation

  Scenario: User can navigate to the homepage
    Given I am on the homepage
    Then I should see the main content
    And I should see the full list of products

  Scenario: User can navigate to profile and cart
    Given I am on the homepage
    When I click the profile button
    Then I should be redirected to the profile page
    Then I am on the homepage
    When I click the cart button
    Then I should be redirected to the cart page

  Scenario: User can search for a product
    Given I am on the homepage
    When I search for "Watch"
    Then I should see the product titled "Premium Leather Watch"

  Scenario: User can sort products by price
    Given I am on the homepage
    When I click the sort by price button
    Then the products should be sorted by price ascending

  Scenario: User can view product details
    Given I am on the homepage
    When I click on "View Details" for "Classic White Sneakers"
    Then I should be taken to the detail page for "Classic White Sneakers"
