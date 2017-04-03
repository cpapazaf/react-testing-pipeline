Feature: Register

  Scenario Outline: Multiple locations
    Given I visit the Register page
    And I add name <Name> and surname <Surname>
    When I click the Register button
    Then I should see the confirmation pop-up

  Examples:
    |      Name     |  Surname  |
    |     Johnny    |    Test   |
    |     Chris     |    Pap    |

