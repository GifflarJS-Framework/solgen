require("module-alias/register");
const helpers = require("@utils/helpers");
const createRequest = require("@models/request");
const createFunctionModel = require("@models/function");
const createNewContractWriter = require("@writers/statements/newContractWriter");

function createVariableWriter() {
  const request = createRequest();
  const newContractWriter = createNewContractWriter();

  const statements = {
    newcontract: newContractWriter.write,
  };

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
   *
   * @param {*} value The value to be assigned to the variable. Can be a string or a
   * statement (Object).
   */
  function _handleValue(value) {
    // If the value is a statement
    if (helpers.isObject(value)) {
      const handler = statements[value.statement];
      // If the statement was found
      if (handler) {
        return handler(value);
      }
      // If not found throw error
      else {
        throw Error("Invalid statement inside variable.");
      }
    }
    // If value is not a statement, return the same value
    else {
      return value;
    }
  }

  /**
   * Define the variables of the contract
   * @param {*} json_variables
   * @private
   */
  function write(variables, cb) {
    let text = "";
    // If variables not an array, is the local variable definition
    if (!Array.isArray(variables)) {
      if (variables.value) {
        const value = _handleValue(variables.value);
        text += variables.type + " " + variables.name + " = " + value + ";\n";
      } else {
        text += variables.type + " " + variables.name + ";\n";
      }
      // If variables is an array, is the global variable definition
    } else {
      text = "//VARIABLES\n";
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
