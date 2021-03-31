import createFunctionModel from "@models/function";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import createRequest from "@models/request";
import { IRequest } from "@models/request/types/IRequest";
import helpers from "@utils/helpers";
import { IGlobalVariableWriter } from "../types/IGlobalVariableWriter";

function createGlobalVariableWriter(): IGlobalVariableWriter {
  const request = createRequest();

  /**
   * Creates a function request to be sent to functionWriter by the
   * component that called the variableWriter
   * @param {Object} variable - The Solidity variable definition object representation
   * @private
   */
  function _requestFunction(variable: IGlobalVariable) {
    if (variable.setMethod) {
      const functionModel = createFunctionModel({
        name: `set${helpers.capitalize(variable.name)}`,
        scope: "public",
      });
      functionModel.setInput(variable.type, `_${variable.name}`);
      functionModel.setAssignment(variable.name, `_${variable.name}`);

      request.functions.push(functionModel);
    }
  }

  const variableWriter: IGlobalVariableWriter = {
    /**
     * Define the variables of the contract
     * @param {*} json_variables
     * @private
     */
    write(
      variables: Array<IGlobalVariable>,
      callback: (request: IRequest) => void
    ): string {
      let text = "";
      text = "//VARIABLES\n";
      variables.map((v) => {
        if (v.scope) {
          text += `${v.type} ${v.scope} ${v.name}`;
          if (v.value) {
            text += ` = ${v.value}`;
          } else {
            text += "";
          }
          text += ";\n";
          // Creating a request for any function creation
          _requestFunction(v);
        }
        return text;
      });
      text += "\n\n";

      if (callback && typeof callback === "function") {
        callback(request);
      }

      return text;
    },
  };

  return variableWriter;
}

export default createGlobalVariableWriter;
