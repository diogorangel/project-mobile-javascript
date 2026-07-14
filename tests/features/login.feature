Feature: Login

    Scenario: Successful Login
        Given I am on the login tab
        When I enter valid login credentials
        Then I should see a Success alert
        And the alert should be closed when I click on OK

    Scenario: Verify login flow and alert dismissal
        Given I am on the login tab
        When I enter valid login credentials
        Then I should see a Success alert
        And the alert should be closed when I click on OK

    Scenario: Verify signup flow and alert dismissal
        Given I am on the signup tab
        When I enter valid signup credentials
        Then I should see a Signed Up alert
        And the alert should be closed when I click on OK
    
    Scenario: Navigate to signup tab and verify state
        Given I am on the signup tab
        Then the alert should be closed when I click on OK