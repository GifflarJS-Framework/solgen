import { IEvent } from "@models/definitions/event/types/IEvent";
import { IInputWriter } from "@writers/statements/inputWriter/types/IInputWriter";
import { inject, injectable } from "tsyringe";
import { IEventWriter } from "../types/IEventWriter";

@injectable()
class EventWriter implements IEventWriter {
  constructor(
    @inject("InputWriter")
    private inputWriter: IInputWriter
  ) {}

  write(events: Array<IEvent>): string {
    let text = "";

    events.map((event) => {
      text += `event ${event.name}(${this.inputWriter.write(
        event.inputs,
        true,
        false
      )});\n`;
      return text;
    });

    if (text) {
      text = `//EVENTS\n${text}\n\n`;
    }

    return text;
  }
}

export default EventWriter;
