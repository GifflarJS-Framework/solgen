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
    // Initing the contract
    const text = "contract " + contract_name + "{\n";

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
   * @param {Object[]} contracts - The list of contracts to be wrote.
   */
  function write(contracts, cb) {
    if (!contracts) {
      return false;
    }

    // Writing the compiler version
    let version = "pragma solidity 0.5.17;\n\n";

    let text = "";
    let contractText;

    contracts.map((json, index) => {
      contractText = "";
      const variableWriter = createVariableWriter();
      const eventWriter = createEventWriter();
      const functionWriter = createFunctionWriter(json.contract.variables);
      const txt_start = _start(json.name);
      let functions = json.contract.functions;
      const txt_variables = variableWriter.write(
        json.contract.variables,
        (request) => {
          functions = functions.concat(request.functions);
        }
      );

      let events = [];
      const txt_functions = functionWriter.write(functions, (request) => {
        events = request.events;
      });
      const txt_events = eventWriter.write(events);
      const txt_close = _close();

      contractText +=
        txt_start +
        txt_variables +
        txt_events +
        txt_functions +
        txt_close +
        "\n\n";

      text += contractText;

      if (cb && typeof cb == "function") {
        cb(version + contractText, index);
      }
    });

    text = version + text;

    return text;
  }

  return { write };
}

module.exports = createContractWriter;
