const createContentWriter = require("../helpers/contentWriter");

/**
 * A Factory that creates a new writer of contract functions
 */
function createFunctionWriter() {
  contentWriter = createContentWriter();

  /**
   * Writes the inputs of a Solidity code.
   * @param {Object[]} inputs - The JSON list of the inputs to be wrote.
   * @returns {string} The inputs parsed to Solidity code as string.
   * @private
   * @example
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
   */
  function _writeInputs(inputs) {
    let text = "";

    // Defining the first input
    if (inputs.length) {
      text += inputs[0].type + " " + inputs[0].name;
    }

    // Removing the first element
    inputs.shift();

    // Defining the other inputs
    inputs.map((input) => {
      text += ", " + input.type + " " + input.name;
    });

    return text;
  }

  /**
   * Define all functions of the contract
   * @param {Object[]} functions - The Object list of functions to be wrote in Solidity code.
   */
  function write(functions) {
    let text = "//FUNCTIONS\n";

    functions.map((f) => {
      // Opening the inputs clousure
      text += "function " + f.name + "(";

      text += _writeInputs(f.inputs);

      // Opening the content clousure
      text += "){\n";

      text += contentWriter.content(f.content);
    });

    // Closing the function
    text += "}\n\n";

    return text;
  }

  return { write };
}

module.exports = createFunctionWriter;
