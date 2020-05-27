const createVariableWriter = require("./variableWriter");
const createEventWriter = require("./eventWriter");
const createFunctionWriter = require("./functionWriter");

/**
 * @name createContractWriter
 * @description A **Factory** that creates the contract writer object to write
 * the contract Solidity code.
 */
function createContractWriter() {
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

    const variableWriter = createVariableWriter();
    const eventWriter = createEventWriter();
    const functionWriter = createFunctionWriter(json.contract.variables);

    const txt_start = _start(json.name);
    const txt_variables = variableWriter.write(
      json.contract.variables,
      (request) => {
        json.contract.functions = json.contract.functions.concat(
          request.functions
        );
      }
    );

    const txt_functions = functionWriter.write(
      json.contract.functions,
      (request) => {
        json.contract.events = request.events;
      }
    );
    const txt_events = eventWriter.write(json.contract.events);
    const txt_close = _close();

    text = txt_start + txt_variables + txt_events + txt_functions + txt_close;

    return text;
  }

  return { write };
}

module.exports = createContractWriter;
