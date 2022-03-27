import { IEvent } from "@models/eventCall/types/IEvent";

export interface IEventWriter {
  write(events: Array<IEvent>): string;
}
