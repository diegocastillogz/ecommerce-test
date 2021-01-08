export default function makeAllItemsRequest({ parseQueryString, get }) {
  return async function allItemsRequest(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const queryString = parseQueryString(httpRequest?.query || {});
      const requestedItem = await get(`sites/MLA/search?${queryString}`);
      return {
        headers,
        statusCode: 200,
        body: requestedItem,
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
