import { IEvent } from "../../../../models/definitions/event/types/IEvent";
export interface IEventWriter {
    write(events: Array<IEvent>): string;
}
