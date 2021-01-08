export default function makeSetAllItemsStructure({ formatListSctructure }) {
  return async function setAllItemsStructure(APIItemsResponse) {
    return await formatListSctructure(APIItemsResponse);
  };
}
