import React from "react";
import { render } from "@testing-library/react";
import ItemsList from "..";
import { ITEMS_LIST } from "fixtures";
import { MemoryRouter } from "react-router-dom";

describe("itemBox tests", () => {
  test("it should render the right data on the itemsList", () => {
    const { getByRole, getByText, getByTestId, getAllByRole } = render(
      <MemoryRouter>
        <ItemsList itemsList={ITEMS_LIST} />
      </MemoryRouter>
    );

    const listitems = Array.from(getAllByRole("listitem"));
    expect(listitems.length).toEqual(ITEMS_LIST.length);

    expect(getByRole("list")).toBeTruthy();
  });

  test("it should NOT render anything if there is no itemList", () => {
    const { queryAllByRole, queryByRole } = render(
      <MemoryRouter>
        <ItemsList itemsList={[]} />
      </MemoryRouter>
    );

    const listitems = Array.from(queryAllByRole("listitem"));
    expect(listitems.length).toEqual(0);

    expect(queryByRole("list")).toBeFalsy();
  });
});
