export default function makeGetOneItemById({
  setOneItemStructure,
  oneItemByIdRequest,
  oneItemDescriptionRequest,
}) {
  return async function getOneItemById(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { body: itemById } = await oneItemByIdRequest(httpRequest);
      const { body: descriptionItem } = await oneItemDescriptionRequest(
        httpRequest
      );

      const formatedItem = await setOneItemStructure(itemById, descriptionItem);

      return {
        headers,
        statusCode: 200,
        body: formatedItem,
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
