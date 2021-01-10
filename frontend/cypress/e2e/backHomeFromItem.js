import { ITEMS_LIST, CATEGORIES_MOCK } from "../../src/fixtures";
import { setCurrencyFormat } from "../../src/helpers";

describe("back home from item tests", () => {
  it("it should back home when the user clicks the header image", () => {
    const itemDetail = ITEMS_LIST[0];

    cy.server().simulateEndpoint({
      url: "**/api/items**",
      id: "searchRequest",
      status: 200,
      response: { categories: CATEGORIES_MOCK, items: ITEMS_LIST },
    });

    cy.server().simulateEndpoint({
      url: `**/api/items/${itemDetail.id}`,
      id: "searchItemRequest",
      status: 200,
      response: itemDetail,
    });

    cy.visit("/");
    cy.findByRole("search").type("drum");
    cy.findByRole("button").click().wait("@searchRequest");

    cy.findByText(itemDetail.title)
      .click()
      .wait("@searchItemRequest")
      .url()
      .should("include", `${itemDetail.id}`);

    cy.findByRole("banner")
      .findAllByRole("img")
      .eq(0)
      .click()
      .wait("@searchRequest")
      .url()
      .should("contain", "items");
  });
});
