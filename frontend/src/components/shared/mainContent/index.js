import React, { Fragment } from "react";
import CategoriesBox from "shared/categoriesBox";
import ItemsList from "shared/itemsList";
import NoResults from "shared/noResults";

const MainContent = ({ categories, itemsList }) => (
  <Fragment>
    {!!categories?.length && <CategoriesBox categories={categories} />}
    {!!itemsList?.length ? <ItemsList itemsList={itemsList} /> : <NoResults />}
  </Fragment>
);

export default MainContent;
