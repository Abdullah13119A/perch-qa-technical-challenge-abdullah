Feature: Cart Page Scenario

  Scenario: User can view their profile information
    Given I am on the homepage
    When I click the profile button
    Given I am on the profile page
    Then I should see my name as "John Doe"
    And I should see my email as "john.doe@example.com"
    And I should see an Edit Profile button

  Scenario: User edits and saves profile information
    Given I am on the homepage
    When I click the profile button
    Given I am on the profile page
    And I should see an Edit Profile button
    Given I am on the editable profile page
    When I update my name to "Jane Smith"
    And I update my email to "jane.smith@example.com"
    And I click "Save Changes"
    Then I should see my name as  "Jane Smith"
    And I should see my email as  "jane.smith@example.com"