export default function makeOneItemByIdRequest({ get }) {
  return async function oneItemByIdRequest(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const itemId = httpRequest?.params?.itemId;
      const requestedItemById = await get(`items/${itemId}`);
      return {
        headers,
        statusCode: 200,
        body: requestedItemById,
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
