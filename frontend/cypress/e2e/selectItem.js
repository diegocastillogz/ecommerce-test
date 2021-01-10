import { ITEMS_LIST, CATEGORIES_MOCK } from "../../src/fixtures";
import { setCurrencyFormat } from "../../src/helpers";

describe("select item tests", () => {
  it("it should render the right data when the user selects and item", () => {
    const itemDetail = ITEMS_LIST[0];

    cy.server().simulateEndpoint({
      url: "**/api/items?search=drum",
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

    cy.get("section")
      .findAllByRole("img")
      .eq(0)
      .should("have.attr", "alt", `imagen de ${itemDetail.title}`);

    cy.get("section")
      .get("h1")
      .eq(0)
      .findByText(itemDetail.title)
      .should("exist");

    cy.get("section")
      .get("h2")
      .eq(0)
      .findByText(setCurrencyFormat(itemDetail.price.amount))
      .should("exist");

    cy.findByText(itemDetail.description).should("exist");

    cy.get("section").findAllByRole("button").eq(0).should("exist");
  });
});
