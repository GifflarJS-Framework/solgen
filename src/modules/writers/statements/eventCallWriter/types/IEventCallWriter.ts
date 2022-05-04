import { IEventCall } from "@models/eventCall/types/IEventCall";

export interface IEventCallWriter {
  write(event: IEventCall): string;
}
