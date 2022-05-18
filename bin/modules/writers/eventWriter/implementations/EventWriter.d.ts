import { IEvent } from "../../../models/event/types/IEvent";
import { IInputWriter } from "../../statements/inputWriter/types/IInputWriter";
import { IEventWriter } from "../types/IEventWriter";
declare class EventWriter implements IEventWriter {
    private inputWriter;
    constructor(inputWriter: IInputWriter);
    write(events: Array<IEvent>): string;
}
export default EventWriter;
