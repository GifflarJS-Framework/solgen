import { IEventCall } from "../../../../models/statements/eventCall/types/IEventCall";
import { IEventCallWriter } from "../types/IEventCallWriter";
declare class EventCallWriter implements IEventCallWriter {
    constructor();
    write(event: IEventCall): string;
}
export default EventCallWriter;
