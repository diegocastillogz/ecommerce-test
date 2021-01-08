export default function makeSetOneItemsStructure({ formatItemDetail }) {
  return async function setOneItemsStructure(
    APIItemResponse,
    APIDescriptionResponse
  ) {
    return await formatItemDetail(APIItemResponse, APIDescriptionResponse);
  };
}
