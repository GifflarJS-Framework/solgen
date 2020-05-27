const helpers = require("../../../utils/helpers");

/**
 * @name createOutputWriter
 * @description A **Factory** that creates a new writer of functions outputs (returns).
 * @param {Object[]} variables The contract and function variables defined.
 * @example
 * {
 *     type: "string",
 *     scope: "public",
 *     name: "message",
 *     setMethod: true,
 *   },
 *   {
 *     type: "string[]",
 *     scope: "public",
 *     name: "messages",
 *     setMethod: true,
 *   }
 */
function createOutputWriter(variables = []) {
  /**
   * @name write
   * @description Writes the Solidity return and returns string representation.
   * @param {Object[]} outputs
   * @param {Function} cb
   * @example
   * Outputs
   * ["message", "messages"]
   *
   * Result
   * "return message, messages;"
   * "returns (string, string[])" (callback)
   *
   * Usage
   * text_return += outputWriter.write(f.outputs, (request) => {
   *   text_returns = request.text_returns;
   * });
   */
  function write(outputs, cb) {
    let text_return = "";
    let text_returns = "";
    let values = [];
    let types = [];

    if (outputs) {
      outputs.map((output) => {
        const variable = variables.filter((variable) => {
          return variable.name === output;
        });

        if (variable[0]) {
          values.push(variable[0].name);
          types.push(variable[0].type);
        }
      });
      if (values.length && types.length) {
        text_return += helpers.getCommaExpression(values);
        text_returns += helpers.getCommaExpression(types);

        text_return = "return " + text_return + ";\n";
        text_returns = "returns (" + text_returns + ")";
      }
    }

    if (typeof cb === "function") {
      cb({ text_returns });
    }

    return text_return;
  }

  return { write };
}

module.exports = createOutputWriter;
