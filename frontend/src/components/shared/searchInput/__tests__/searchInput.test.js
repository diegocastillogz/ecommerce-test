import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchInput from "..";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("itemBox tests", () => {
  test("it should redirect the user when fills and submit the form", () => {
    const { getByRole } = render(<SearchInput />);
    fireEvent.change(getByRole("textbox"), {
      target: { value: "guitar" },
    });
    fireEvent.submit(getByRole("search"));
    
    expect(mockHistoryPush).toHaveBeenCalledWith({
      pathname: `/items`,
      search: "?search=guitar",
    });
  });
});
