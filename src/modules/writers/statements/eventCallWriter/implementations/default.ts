import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IInput } from "@models/function/types/IInput";
import createRequest from "@models/request";
import { IRequest } from "@models/request/types/IRequest";
import createInputWriter from "@writers/statements/inputWriter";
import { IEventCallWriter } from "../types/IEventCallWriter";

function createEventCallWriter(): IEventCallWriter {
  const inputWriter = createInputWriter();
  const request = createRequest();

  const eventCallWriter: IEventCallWriter = {
    /**
     * @name write
     * @description Writes a Solidity event call. **This method updates the request
     * object to send the events to be created by the eventWriter**.
     * @param {Object} event The event object to be wrote in Solidity code.
     * @returns {string} The event Solidity code as **string**.
     * @example
     * Input
     * {
     *   statement: "event_call",
     *   name: "myEvent",
     *   inputs: {
     *      name: "_message",
     *      type: "string"
     *   },
     *   {
     *      name: "_val",
     *      type: "uint"
     *   }
     * }
     *
     * Return
     * "emit myEvent(_message, _val);"
     */
    write(event: IEventCall, callback: (request: IRequest) => void): string {
      request.events.push(event);
      const inputs_copy: Array<IInput> = [];
      // Copying the object or else the args function
      // shifts the first element of the original object
      // We need the object later for creating the events
      Object.assign(inputs_copy, event.inputs);
      const text = `emit ${event.name}(${inputWriter.write(
        inputs_copy,
        false
      )})`;

      callback(request);
      return text;
    },
  };

  return eventCallWriter;
}

export default createEventCallWriter;
