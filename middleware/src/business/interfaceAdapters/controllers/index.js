import makeGetAllItems from "@controllers/getAllItems";
import makeGetOneItemById from "@controllers/getOneItemById";
import {
  allItemsRequest,
  oneItemByIdRequest,
  oneItemDescriptionRequest,
} from "@api";
import { setAllItemsStructure, setOneItemStructure } from "@useCases";

const getAllItems = makeGetAllItems({
  allItemsRequest,
  setAllItemsStructure,
});

const getOneItemById = makeGetOneItemById({
  oneItemByIdRequest,
  setOneItemStructure,
  oneItemDescriptionRequest,
});

export { getAllItems, getOneItemById };
