export const parseQueryString = (params) => {
  if (Object.entries(params).length) {
    return Object.keys(params)
      .map((key) => {
        if (key === "search") return `q=:${encodeURIComponent(params[key])}`;
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
      })
      .join("&");
  }
  return "q=:query";
};

export const formatListSctructure = ({
  results,
  filters,
  available_filters,
}) => {
  if (!results.length) return [];
  const categoriesObjects = [
    ...(filters[0]?.values[0]?.path_from_root || []),
    ...(available_filters[0]?.values || []),
  ];
  const categoriesNames = getCategoriesNames(categoriesObjects);
  const formatedData = setListStructure(results, categoriesNames);
  return formatedData;
};

const setItemListStructure = ({
  id,
  title,
  price,
  currency_id,
  thumbnail,
  condition,
  shipping,
  seller,
  address,
}) => ({
  id,
  title,
  author: seller.id,
  price: {
    amount: price,
    currency: currency_id,
    decimals: 0,
  },
  picture: thumbnail,
  condition,
  freeShipping: shipping.free_shipping,
  city: address.state_name,
});

const getCategoriesNames = (categories) =>
  categories.map(({ name }) => name).filter((categoryName) => categoryName);

const setListStructure = (dataToFormat, categories) => ({
  categories,
  items: dataToFormat.map(setItemListStructure),
});

export const formatItemDetail = (
  {
    id,
    seller_id,
    title,
    price,
    currency_id,
    thumbnail,
    sold_quantity,
    condition,
    seller_address,
  },
  { plain_text }
) => {
  return {
    author: seller_id,
    title,
    item: {
      id,
    },
    price: {
      amount: price,
      currency: currency_id,
      decimals: 0,
    },
    picture: thumbnail,
    condition,
    soldQuantity: sold_quantity,
    city: seller_address.state.name,
    description: plain_text,
  };
};
