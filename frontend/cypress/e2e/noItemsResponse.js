describe("no items response tests", () => {
  it("it should render the no data response message when the search does not have a response", () => {
    cy.server().simulateEndpoint({
      url: "**/api/items?search=drum",
      id: "searchRequest",
      status: 200,
      response: { categories: [], items: [] },
    });

    cy.visit("/");

    cy.findByRole("search").type("drum");
    cy.findByRole("button")
      .click()
      .wait("@searchRequest")
      .url()
      .should("include", "items?search=drum");

    cy.findByText("no se encontraron resultados para tu búsqueda");
  });
});
