import makeAllItemsRequest from "@api/allItemsRequest";
import makeOneItemByIdRequest from "@api/oneItemByIdRequest";
import makeOneItemDescriptionRequest from "@api/oneItemDescriptionRequest";
import { parseQueryString } from "@helpers";
import { get } from "@services";

const allItemsRequest = makeAllItemsRequest({ parseQueryString, get });
const oneItemByIdRequest = makeOneItemByIdRequest({ get });
const oneItemDescriptionRequest = makeOneItemDescriptionRequest({ get });

export { allItemsRequest, oneItemByIdRequest, oneItemDescriptionRequest };
