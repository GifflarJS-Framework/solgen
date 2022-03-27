import helpers from "@utils/helpers";
import createRequest from "@models/request";
import createFunctionModel from "@models/function";
import createNewContractWriter from "@writers/statements/newContractWriter";
import { IVariable } from "@models/variable/types/IVariable";
import { IRequest } from "@models/request/types/IRequest";
import { INewContract } from "@models/newcontract/types/INewContract";
import { IVariableStatements } from "../types/IVariableStatements";
import { IVariableWriter } from "../types/IVariableWriter";

function createVariableWriter(): IVariableWriter {
  const request = createRequest();
  const newContractWriter = createNewContractWriter();

  const statements: IVariableStatements = {
    newcontract: newContractWriter.write,
  };

  /**
   *
   * @param {*} value The value to be assigned to the variable. Can be a string or a
   * statement (Object).
   */
  function _handleValue(value: string | INewContract) {
    // If the value is a statement
    if (typeof value !== "string") {
      const key: keyof IVariableStatements = value.statement;
      const handler = statements[key];
      // If the statement was found
      if (handler) {
        return handler(value);
      }

      // If not found throw error
      throw Error("Invalid statement inside variable.");
    }
    // If value is not a statement, return the same value
    else {
      return value;
    }
  }

  const variableWriter: IVariableWriter = {
    /**
     * Define the variables of the contract
     * @param {*} json_variables
     * @private
     */
    write(variable: IVariable, callback: (request: IRequest) => void): string {
      let text = "";
      // If variable not an array, is the local variable definition

      if (variable.value) {
        const value = _handleValue(variable.value);
        text += `${variable.type} ${variable.name} = ${value}`;
      } else {
        text += `${variable.type} ${variable.name}`;
      }
      // If variables is an array, is the global variable definition

      if (callback && typeof callback === "function") {
        callback(request);
      }

      return text;
    },
  };

  return variableWriter;
}

export default createVariableWriter;
