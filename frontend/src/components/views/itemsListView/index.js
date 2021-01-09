import React, { useState } from "react";
import useGetData from "hooks/useGetData";

import MainContent from "../../shared/mainContent";

const ItemsListView = () => {
  const [apiResponse, setApiResponse] = useState([]);
  useGetData("/items", setApiResponse);
  
  return (
    <MainContent
      categories={apiResponse.categories}
      itemsList={apiResponse.items}
    />
  );
};

export default ItemsListView;
