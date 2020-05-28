const createInputWriter = require("./statements/inputWriter");

/**
 * @name createEventWriter
 * @description A **Factory** that creates the event writer object
 */
function createEventWriter() {
  const inputWriter = createInputWriter();

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
    let text = "";

    events.map((event) => {
      text +=
        "event " + event.name + "(" + inputWriter.write(event.inputs) + ");\n";
    });

    if (text) {
      text = "//EVENTS\n" + text + "\n\n";
    }

    return text;
  }

  return { write };
}

module.exports = createEventWriter;
