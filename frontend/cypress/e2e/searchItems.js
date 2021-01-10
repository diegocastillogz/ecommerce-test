import { ITEMS_LIST, CATEGORIES_MOCK } from "../../src/fixtures";
import { setCurrencyFormat } from "../../src/helpers";

describe("search items tests", () => {
  it("it should render all the categories and items from the responses", () => {
    cy.server().simulateEndpoint({
      url: "**/api/items?search=drum",
      id: "searchRequest",
      status: 200,
      response: { categories: CATEGORIES_MOCK, items: ITEMS_LIST },
    });

    cy.visit("/");
    cy.findByRole("search").type("drum");
    cy.findByRole("button")
      .click()
      .wait("@searchRequest")
      .url()
      .should("include", "items?search=drum");

    CATEGORIES_MOCK.slice(0, 7).forEach((item, index) => {
      cy.findAllByRole("listitem").eq(index).should("contain", item);
    });

    ITEMS_LIST.forEach(
      ({ title, city, price: { amount }, freeShipping }, index) => {
        cy.findAllByRole("listitem")
          .eq(index + 7)
          .should("contain", title)
          .should("contain", city)
          .should("contain", setCurrencyFormat(amount));

        if (freeShipping) {
          cy.findAllByRole("listitem")
            .eq(index + 7)
            .findByRole("img")
            .should("have.attr", "alt", `imagen de ${title}`);
        }
      }
    );
  });
});
