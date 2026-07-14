Feature: Authentication Flow Integration

    
    Scenario: Register first then navigate to login
        Given I am on the signup tab
        When I enter valid signup credentials
        Then I should see a Signed Up alert
        And the alert should be closed when I click on OK
        Given I am on the login tab
        When I enter valid login credentials
        Then I should see a Success alert

    
    Scenario: Quick toggle between auth tabs before submission
        Given I am on the login tab
        And I am on the signup tab
        When I enter valid signup credentials
        Then I should see a Signed Up alert