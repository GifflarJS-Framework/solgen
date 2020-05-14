const createStatementWriter = require("../helpers/statementWriter");

/**
 * @name createFunctionWriter
 * @description A **Factory** that creates a new writer of contract functions
 */
function createFunctionWriter() {
  statementWriter = createStatementWriter();

  /**
   * Define all functions of the contract
   * @param {Object[]} functions - The Object list of functions to be wrote in Solidity code.
   * @returns {string} **String** of all functions in Solidity format.
   * @example
   * Json
   * [
   *   {
   *     name: "myFunction",
   *     isConstructor: false,
   *     inputs: [
   *       {
   *         name: "_input1",
   *         type: "string"
   *       }
   *     ],
   *     outputs: [],
   *     content: {
   *       assignment: {
   *         variable: "input1",
   *         value: "_input1"
   *       }
   *     }
   *   }
   * ]
   *
   * Return
   * function myFunction(string _input1){
   *   input1 = _input1;
   * }
   *
   * // If isConstructor is true, the name of the function
   * // will be desconsidered, and the return will be
   * Return
   * constructor(string _input1){
   *   input1 = _input1;
   * }
   */
  function write(functions) {
    let text = "//FUNCTIONS\n";

    functions.map((f) => {
      // Verifying whether is a constructor or not
      // Opening the inputs clousure
      if (f.isConstructor) {
        text += "constructor(";
      } else {
        text += "function " + f.name + "(";
      }

      // Writing the inputs
      text += statementWriter.writeInputs(f.inputs);

      // Closing inputs and opening the content clousure
      text += "){\n";

      // Writing function content
      text += statementWriter.writeContent(f.content);

      // Closing the function
      text += "}\n\n";
    });

    return text;
  }

  return { write };
}

module.exports = createFunctionWriter;
