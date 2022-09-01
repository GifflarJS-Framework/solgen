import { IEventCall } from "../../../../models/statements/eventCall/types/IEventCall";
export interface IEventCallWriter {
    write(event: IEventCall): string;
}
