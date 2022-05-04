import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IInput } from "@models/function/types/IInput";
import { IInputWriter } from "@writers/statements/inputWriter/types/IInputWriter";
import { inject, injectable } from "tsyringe";
import { IEventCallWriter } from "../types/IEventCallWriter";

@injectable()
class EventCallWriter implements IEventCallWriter {
  constructor(
    @inject("InputWriter")
    private inputWriter: IInputWriter
  ) {}

  write(event: IEventCall): string {
    const inputs_copy: Array<IInput> = [];
    // Copying the object or else the args function
    // shifts the first element of the original object
    Object.assign(inputs_copy, event.inputs);
    const text = `emit ${event.name}(${this.inputWriter.write(
      inputs_copy,
      false
    )})`;
    return text;
  }
}

export default EventCallWriter;
