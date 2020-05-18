const createStatementWriter = require("../helpers/statementWriter");

/**
 * @name createEventWriter
 * @description A **Factory** that creates the event writer object
 */
function createEventWriter() {
  const statementWriter = createStatementWriter();

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
  function write(events) {
    let text = "//EVENTS\n";

    events.map((event) => {
      text +=
        "event " +
        event.name +
        "(" +
        statementWriter.writeInputs(event.inputs) +
        ");\n";
    });

    text += "\n\n";

    return text;
  }

  return { write };
}

module.exports = createEventWriter;
