Feature: Subscription Flow
 
  Scenario Outline: New user signup
    Given I open the signup page
    When I register with name "<name>", email "<email>", and password "<password> "
    Then I should be redirected to the home page
 
    Examples:
      | name   | email                 | password   |
      | Alice  | alice+test@mail.com   | Pass123!   |
      | Bob    | bob+test@mail.com     | Pass123!   |
 
   Scenario Outline: Admin login
    Given I open the admin login page
    When I login as admin with email "<adminEmail>" and password "<adminPassword>"
    Then I should see the admin dashboard
 
    Examples:
      | name   | adminEmail            | adminPassword   |
      | Alice  | alice+test@mail.com   | Pass123!   |
      | Bob    | bob+test@mail.com     | Pass123!   |
 