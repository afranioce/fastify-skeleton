Feature: Access a non-existing resource
  As a API client
  I want a 200 response for /_healthcheck resource
  to know that I have successfuly

  Scenario: Get the a health check resource
    When I send a GET request to "/_healthcheck"
    Then print response
    And the response code should be 200
    And the response message should be "OK"
