import { IEvent } from "../../../models/event/types/IEvent";
export interface IEventWriter {
    write(events: Array<IEvent>): string;
}
