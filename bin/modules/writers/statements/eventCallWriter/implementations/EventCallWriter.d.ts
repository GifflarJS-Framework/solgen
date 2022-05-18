import { IEventCall } from "../../../../models/eventCall/types/IEventCall";
import { IEventCallWriter } from "../types/IEventCallWriter";
declare class EventCallWriter implements IEventCallWriter {
    constructor();
    write(event: IEventCall): string;
}
export default EventCallWriter;
