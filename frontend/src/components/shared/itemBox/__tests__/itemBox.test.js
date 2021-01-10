import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ItemBox from "../";
import { ITEMS_LIST } from "fixtures";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { setCurrencyFormat } from "../../../../helpers";

describe("itemBox tests", () => {
  test("it should render the right data on the itemBox with a free shipping item", () => {
    const itemList = ITEMS_LIST[0];
    const { getByRole, getByText, getByTestId } = render(
      <MemoryRouter>
        <ItemBox item={itemList} />
      </MemoryRouter>
    );
    expect(getByRole("img")).toHaveAttribute(
      "alt",
      `imagen de ${itemList.title}`
    );

    expect(getByRole("img")).toHaveAttribute("src", itemList.picture);

    expect(getByText(itemList.city)).toBeTruthy();
    expect(getByText(itemList.title)).toBeTruthy();
    expect(getByText(setCurrencyFormat(itemList.price.amount))).toBeTruthy();

    expect(getByTestId("free-shipping-image")).toBeTruthy();
    expect(getByTestId("free-shipping-image")).toHaveAttribute(
      "aria-label",
      "envio gratis"
    );
  });

  test("it should render the right data on the itemBox with a free shipping item", () => {
    const itemList = ITEMS_LIST[1];
    const { getByRole, getByText, queryByTestId } = render(
      <MemoryRouter>
        <ItemBox item={itemList} />
      </MemoryRouter>
    );
    expect(getByRole("img")).toHaveAttribute(
      "alt",
      `imagen de ${itemList.title}`
    );

    expect(getByRole("img")).toHaveAttribute("src", itemList.picture);

    expect(getByText(itemList.city)).toBeTruthy();
    expect(getByText(itemList.title)).toBeTruthy();
    expect(getByText(setCurrencyFormat(itemList.price.amount))).toBeTruthy();

    expect(queryByTestId("free-shipping-image")).toBeFalsy();
  });

  test("it should redirect to detail view", () => {
    const history = createMemoryHistory();
    const itemList = ITEMS_LIST[1];

    const { getByText } = render(
      <Router history={history}>
        <ItemBox item={itemList} />
      </Router>
    );

    fireEvent.click(getByText(itemList.title));

    expect(history.location.pathname).toBe(`/items/${itemList.id}`);
  });
});
