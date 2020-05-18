const helpers = require("../../lib/helpers");
const createRequest = require("../models/request");

function createVariableWriter() {
  const request = createRequest();

  /**
   * Creates a function request to be sent to functionWriter by the
   * component that called the variableWriter
   * @param {Object} variable - The Solidity variable definition object representation
   * @private
   */
  function _requestFunction(variable) {
    if (variable.setMethod) {
      const _function = {
        name: "set" + helpers.capitalize(variable.name),
        isConstructor: false,
        inputs: [
          {
            name: "_" + variable.name,
            type: variable.type,
          },
        ],
        content: [
          {
            statement: "assignment",
            variable: variable.name,
            value: "_" + variable.name,
          },
        ],
      };

      request.functions.push(_function);
    }
  }

  /**
   * Define the variables of the contract
   * @param {*} json_variables
   * @private
   */
  function write(variables, cb) {
    text = "// VARIABLES\n";
    variables.map((v) => {
      text += v.type + " " + v.scope + " " + v.name + ";\n";
      // Creating a request for any function creation
      _requestFunction(v);
    });

    text += "\n\n";

    if (cb && typeof cb == "function") {
      cb(request);
    }

    return text;
  }

  return { write };
}

module.exports = createVariableWriter;
