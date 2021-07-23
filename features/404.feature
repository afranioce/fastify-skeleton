Feature: Access a non-existing resource
  As a API client
  I want a 404 response for a non-existing resource
  to know that I have failed

  Scenario: Get the a non-existing resource
    When I send a POST request to "/route/non-exist"
    Then print response
    And the response code should be 404
    And the response message should be "Not Found"
