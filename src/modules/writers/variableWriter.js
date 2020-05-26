const helpers = require("../utils/helpers");
const createRequest = require("../utils/request");
const createFunctionModel = require("../models/function");

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
      const functionModel = createFunctionModel(
        "set" + helpers.capitalize(variable.name),
        "public"
      );
      functionModel.setInput(variable.type, "_" + variable.name);
      functionModel.setAssignment(variable.name, "_" + variable.name);

      request.functions.push(functionModel.json());
    }
  }

  /**
   * Define the variables of the contract
   * @param {*} json_variables
   * @private
   */
  function write(variables, cb) {
    let text = "";
    if (!Array.isArray(variables)) {
      if (variables.value) {
        text +=
          variables.type +
          " " +
          variables.name +
          " = " +
          variables.value +
          ";\n";
      } else {
        text += variables.type + " " + variables.name + ";\n";
      }
    } else {
      text = "// VARIABLES\n";
      variables.map((v) => {
        if (v.scope) {
          text += v.type + " " + v.scope + " " + v.name;
          v.value ? (text += " = " + v.value) : "";
          text += ";\n";
          // Creating a request for any function creation
          _requestFunction(v);
        }
      });
      text += "\n\n";
    }

    if (cb && typeof cb == "function") {
      cb(request);
    }

    return text;
  }

  return { write };
}

module.exports = createVariableWriter;
