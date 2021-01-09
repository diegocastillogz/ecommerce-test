import React, { useState, Fragment } from "react";
import useGetData from "hooks/useGetData";
import CategoriesBox from "shared/categoriesBox";
import ItemsList from "shared/itemsList";

const ItemsListView = () => {
  const [apiResponse, setApiResponse] = useState([]);
  useGetData("api/items", setApiResponse);

  return (
    <Fragment>
      <CategoriesBox categories={apiResponse.categories} />
      <ItemsList itemsList={apiResponse.items} />
    </Fragment>
  );
};

export default ItemsListView;
