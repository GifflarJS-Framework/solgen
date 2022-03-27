import { IEvent } from "./IEvent";

export interface IEventCall extends IEvent {
  statement: "event_call";
}
