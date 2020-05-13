const createFunctionWriter = require("./writers/functionWriter");
const createVariableWriter = require("./writers/variableWriter");

/**
 * Creates the contract writer object to write the contract Solidity code.
 */
function createWriter() {
  /**
   * Write the initial clousures of the contract Solidity code.
   * @private
   */
  function _start(contract_name) {
    // Writing the compiler version
    text = "pragma solidity ^0.4.23;\n\n";

    // Initing the contract
    text += "contract " + contract_name + "{\n";

    return text;
  }

  /**
   * Write the final clousures of the contract Solidity code.
   * @private
   */
  function _close() {
    // Closing contract definition
    text = "}";

    return text;
  }

  /**
   * Writes the contract Solidity code.
   * @param {Object} json - The JSON of the contract to be wrote.
   */
  function write(json) {
    if (!json) {
      return false;
    }

    let text = "";

    const functionWriter = createFunctionWriter();
    const variableWriter = createVariableWriter();

    text = _start(json.name);
    text += variableWriter.write(json.content.variables);
    text += functionWriter.write(json.content.functions);
    text += _close();

    return text;
  }

  return { write };
}

module.exports = createWriter;
