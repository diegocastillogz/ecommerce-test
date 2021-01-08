export default function makeGetAllItems({
  setAllItemsStructure,
  allItemsRequest,
}) {
  return async function getAllItems(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { body } = await allItemsRequest(httpRequest);
      const formatedItemsList = await setAllItemsStructure(body);

      return {
        headers,
        statusCode: 200,
        body: formatedItemsList,
      };
    } catch (error) {
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message,
        },
      };
    }
  };
}
