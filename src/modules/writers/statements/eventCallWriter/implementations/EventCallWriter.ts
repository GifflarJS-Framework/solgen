import { IEventCall } from "@models/statements/eventCall/types/IEventCall";
import helpers from "@utils/helpers";
import { IEventCallWriter } from "../types/IEventCallWriter";

class EventCallWriter implements IEventCallWriter {
  constructor() {}

  write(event: IEventCall): string {
    const text = `emit ${event.name}(${helpers.getCommaExpression(
      event.variables
    )})`;
    return text;
  }
}

export default EventCallWriter;
