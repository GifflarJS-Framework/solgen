import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IRequest } from "@models/request/types/IRequest";

export interface IEventCallWriter {
  write(event: IEventCall, callback: (request: IRequest) => void): string;
}
