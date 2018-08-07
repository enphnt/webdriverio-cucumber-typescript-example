Feature: Homepage Page Navigation

  Scenario: Navigating to the homepage
    Given I open the site "/"
    Then  I expect that "body" will be present
    Then  I expect that "body" will be visible
