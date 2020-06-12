const createContentWriter = require("./statements/contentWriter");
const createInputWriter = require("./statements/inputWriter");
const createOutputWriter = require("./statements/outputWriter");
const createRequest = require("../models/request");

/**
 * @name createFunctionWriter
 * @description A **Factory** that creates a new writer of contract functions.
 * @param {Object[]} variables The contract variables defined.
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
function createFunctionWriter(variables) {
  const inputWriter = createInputWriter();
  const contentWriter = createContentWriter();
  const outputWriter = createOutputWriter(variables);

  /**
   * @name write
   * @description Define all functions of the contract
   * @param {Object[]} functions The Object list of functions to be wrote in Solidity code.
   * @param {Function} cb A callback function to handle the request values.
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
  function write(functions, cb) {
    let text = "//FUNCTIONS\n";
    let request = createRequest();

    functions.map((f) => {
      let text_return = "";
      let text_returns = "";
      let scope = " " + f.scope;
      // Verifying whether is a constructor or not
      // Opening the inputs clousure
      if (f.isConstructor) {
        text += "constructor(";
      } else {
        text += "function " + f.name + "(";
      }

      // Writing the inputs
      text += inputWriter.write(f.inputs);

      // Requiring outputs
      text_return += outputWriter.write(f.outputs, (request) => {
        text_returns = request.text_returns;
      });

      // Organizing all modifiers
      let modifiers = "";
      if (f.modifiers) {
        f.modifiers.map((modifier) => {
          modifiers += " " + modifier;
        });
      }

      // Closing inputs and setting scope
      text += ")" + scope + modifiers;

      // Setting the returns text
      if (text_returns) {
        text += " " + text_returns + " ";
      }

      // Opening the content clousure
      text += "{\n";

      // Writing function content
      text += contentWriter.write(f.content, (_request) => {
        request = _request;
      });

      // Setting the return values
      text += text_return;

      // Closing the function
      text += "}\n\n";
    });

    if (cb && typeof cb === "function") {
      cb(request);
    }

    return text;
  }

  return { write };
}

module.exports = createFunctionWriter;
