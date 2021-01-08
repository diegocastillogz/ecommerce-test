export default function makeOneItemDescriptionRequest({ get }) {
  return async function oneItemDescriptionRequest(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const itemId = httpRequest?.params?.itemId;
      const requestedItemDescription = await get(`items/${itemId}/description`);
      return {
        headers,
        statusCode: 200,
        body: requestedItemDescription,
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
