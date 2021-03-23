import { IRequest } from "../types/IRequest";

function createRequest(): IRequest {
  const request = {
    functions: [],
    events: [],
    text_returns: "",
  };
  return request;
}

export default createRequest;
