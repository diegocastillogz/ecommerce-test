import makeAllItemsRequest from "@api/allItemsRequest";
import makeOneItemByIdRequest from "@api/oneItemByIdRequest";
import makeOneItemDescriptionRequest from "@api/oneItemDescriptionRequest";
import { parseQueryString } from "@helpers";
import { get } from "@services";

function makeAPICallback(APIRequest) {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
      },
    };
    APIRequest(httpRequest)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send({ error: "An unkown error occurred." });
      });
  };
}

const allItemsRequest = makeAllItemsRequest({ parseQueryString, get });
const oneItemByIdRequest = makeOneItemByIdRequest({ get });
const oneItemDescriptionRequest = makeOneItemDescriptionRequest({ get });

export { allItemsRequest, oneItemByIdRequest, oneItemDescriptionRequest };
