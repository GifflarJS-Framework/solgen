import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IFunction } from "@models/function/types/IFunction";

export interface IRequest {
  functions: Array<IFunction>;
  events: Array<IEventCall>;
  text_returns: string;
}
