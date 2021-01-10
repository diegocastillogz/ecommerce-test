import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useGetData from "hooks/useGetData";
import MainContent from "shared/mainContent";

const SearchResultsItemsView = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const { pathname, search } = useLocation();
  const url = `${pathname}${search}`;

  useGetData(url, setApiResponse);
  return (
    <MainContent
      itemsList={apiResponse.items}
      categories={apiResponse.categories}
    />
  );
};

export default SearchResultsItemsView;
