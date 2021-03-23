import { IEvent } from "@models/callevent/types/IEvent";

export interface IRequest {
  functions: Array<IFunction>;
  events: Array<IEvent>;
  text_returns: string;
}
