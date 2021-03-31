import { IEvent } from "@models/eventCall/types/IEvent";
import createInputWriter from "@writers/statements/inputWriter";
import { IEventWriter } from "../types/IEventWriter";

/**
 * @name createEventWriter
 * @description A **Factory** that creates the event writer object
 */
function createEventWriter(): IEventWriter {
  const inputWriter = createInputWriter();

  const eventWriter: IEventWriter = {
    /**
     *
     * @param {Object[]} events - All the events to be wrote in in Solidity code.
     * @returns {string} **String** of all events in Solidity format.
     * @example
     * Json
     * [
     *   name: "myEvent",
     *   inputs: [
     *     {
     *       name: "_input1",
     *       type: "uint"
     *     },
     *   ]
     * ]
     *
     * Return
     * //EVENTS
     * event myEvent(uint _input1);
     */
    write(events: Array<IEvent>): string {
      let text = "";

      events.map((event) => {
        text += `event ${event.name}(${inputWriter.write(event.inputs)});\n`;
        return text;
      });

      if (text) {
        text = `//EVENTS\n${text}\n\n`;
      }

      return text;
    },
  };

  return eventWriter;
}

export default createEventWriter;
