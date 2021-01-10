import React from "react";
import { render } from "@testing-library/react";
import CategoriesBox from "../";
import { CATEGORIES_MOCK } from "fixtures";

const MAX_CATEGORIES_RENDER = 7;

describe("categoriesBox tests", () => {
  test("it should render the maximum categories number", () => {
    const { getAllByRole } = render(
      <CategoriesBox categories={CATEGORIES_MOCK} />
    );

    const listitems = Array.from(getAllByRole("listitem"));

    expect(listitems.length).toEqual(MAX_CATEGORIES_RENDER);
  });

  test("it should render the expected texts", () => {
    const { queryAllByText } = render(
      <CategoriesBox categories={CATEGORIES_MOCK} />
    );

    const expectedTexts = CATEGORIES_MOCK.slice(0, MAX_CATEGORIES_RENDER).map(
      (expectedTest) => new RegExp(expectedTest)
    );

    expectedTexts.forEach((expectedText) => {
      expect(queryAllByText(new RegExp(expectedText))).toBeTruthy();
    });
  });

  test("it should NOT render the not expected texts", () => {
    const { queryAllByText } = render(
      <CategoriesBox categories={CATEGORIES_MOCK} />
    );

    const notExpectedTexts = CATEGORIES_MOCK.slice(MAX_CATEGORIES_RENDER).map(
      (expectedTest) => new RegExp(expectedTest)
    );

    notExpectedTexts.forEach((expectedText) => {
      expect(queryAllByText(new RegExp(expectedText))).toEqual([]);
    });
  });
});
