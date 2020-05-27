const createRequest = require("../../models/request");
const createInputWriter = require("./inputWriter");

function createCalleventWriter() {
  const inputWriter = createInputWriter();
  const request = createRequest();
  /**
   * @name write
   * @description Writes a Solidity event call. **This method updates the request
   * object to send the events to be created by the eventWriter**.
   * @param {Object} event The event object to be wrote in Solidity code.
   * @returns {string} The event Solidity code as **string**.
   * @example
   * Input
   * {
   *   statement: "callevent",
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
  function write(event, cb) {
    request.events.push(event);
    const inputs_copy = [];
    // Copying the object or else the args function
    // shifts the first element of the original object
    // We need the object later for creating the events
    Object.assign(inputs_copy, event.inputs);
    const text =
      "emit " +
      event.name +
      "(" +
      inputWriter.write(inputs_copy, false) +
      ");\n";

    cb(request);
    return text;
  }

  return { write };
}

module.exports = createCalleventWriter;
