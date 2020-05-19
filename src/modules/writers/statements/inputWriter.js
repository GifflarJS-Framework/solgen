function createInputWriter() {
  /**
   * @name write
   * @description Writes the inputs of a Solidity code.
   * @param {Object[]} inputs The JSON list of the inputs to be wrote.
   * @param {Boolean} typeon The value to turn on or off the type names before the
   * variable. **Default is true**
   * @returns {string} The inputs parsed to Solidity code as string.
   * @private
   * @example
   * Prototype
   * function writeInputs(inputs, typeon = true) {
   * //[...]
   * }
   *
   * Input
   * [
   *   {
   *     name:"_message",
   *     type: "string"
   *   },
   *   {
   *     name: "_number",
   *     type: "uint"
   *   }
   * ]
   *
   * Usage
   * "(" + inputWriter.writeInputs(inputs) + ")"
   * => "(string _message, uint _number)"
   *
   * Usage
   * "(" + inputWriter.writeInputs(inputs, false) + ")"
   * => "(_message, _number)"
   *
   */
  function write(inputs, typeon = true) {
    let text = "";

    // If there are no inputs
    if (!inputs.length) {
      return text;
    }

    // Defining the first input
    if (typeon) {
      text += inputs[0].type + " ";
    }
    text += inputs[0].name;

    // Removing the first element
    inputs.shift();

    // Defining the other inputs
    inputs.map((input) => {
      text += ", ";
      if (typeon) {
        text += input.type + " ";
      }
      text += input.name;
    });

    return text;
  }

  return { write };
}

module.exports = createInputWriter;
