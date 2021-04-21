import createEventModel from "@models/eventCall";
import { IEventCall } from "@models/eventCall/types/IEventCall";
import createFunctionModel from "@models/function";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import createGlobalVariableModel from "@models/globalVariable/implementations/default";
import createVariableModel from "@models/variable";
import { IVariable } from "@models/variable/types/IVariable";
import { IContract } from "../types/IContract";
import { IContractJson } from "../types/IContractJson";
import { ICreateContractDTO } from "../types/ICreateContractDTO";

/**
 * @todo Finish documentation
 * @author Levy Santiago
 * @module
 * @category Model
 * @name createContractModel
 * @description A <b>Factory</b> for creating an contract object model (json).
 * @returns {Object} The contract object model.
 * @requires createFunctionModel
 * @requires createVariableModel
 * @requires createEventModel
 * @example
 * Usage
 * const contractModel = createContractModel("MyContract");
 *
 * Return
 * {
 *  name: "MyContract",
 *   contract: {
 *     variables: [],
 *     functions: [],
 *   }
 * }
 */
function createContractModel({ contractName }: ICreateContractDTO): IContract {
  /**
   * @todo Write documentation
   */
  const contract_json: IContract = {
    name: contractName,
    contract: {
      variables: [],
      functions: [],
    },

    toJson(): IContractJson {
      const jsonfunction = JSON.stringify(this);
      return JSON.parse(jsonfunction);
    },

    /**
     * @todo Write documentation
     */
    createEventCall(name: string, inputs: Array<IInput>): IEventCall {
      const newEventCall = createEventModel({ name, inputs });
      return newEventCall;
    },

    /**
     * @todo Write documentation
     */
    createVariable(
      type: string,
      name: string,
      scope?: string,
      setMethod?: boolean,
      value?: string
    ): IVariable {
      let variable = null;
      if (scope) {
        variable = createGlobalVariableModel({
          type,
          name,
          scope,
          setMethod,
          value,
        });
      } else {
        variable = createVariableModel({
          type,
          name,
          value,
        });
      }
      this.contract.variables.push(variable);
      return variable;
    },

    /**
     * @todo Write documentation
     */
    createConstructor(
      scope: string,
      inputs?: Array<IInput>,
      outputs?: Array<string>
    ): IFunction {
      const _function = createFunctionModel({
        name: "",
        scope,
        isConstructor: true,
        inputs,
        outputs,
        globalVars: this.contract.variables,
      });
      this.contract.functions.push(_function);

      return _function;
    },

    createFunction(
      name: string,
      scope: string,
      inputs: Array<IInput>,
      outputs: Array<string>
    ): IFunction {
      const _function = createFunctionModel({
        name,
        scope,
        inputs,
        outputs,
        isConstructor: false,
        globalVars: this.contract.variables,
      });
      this.contract.functions.push(_function);

      return _function;
    },

    toString(): string {
      return JSON.stringify(this);
    },
  };

  return contract_json;
}

export default createContractModel;
