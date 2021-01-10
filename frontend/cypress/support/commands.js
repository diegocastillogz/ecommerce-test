import "@testing-library/cypress/add-commands";

Cypress.Commands.add(
  "simulateEndpoint",
  ({ url = "", status = 200, method = "GET", response = {}, id = "" }) =>
    cy
      .route({
        url,
        status,
        method,
        response,
      })
      .as(id)
);
