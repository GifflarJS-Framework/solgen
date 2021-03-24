import createEventModel from "@models/callevent";
import { IEvent } from "@models/callevent/types/IEvent";
import createFunctionModel from "@models/function";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
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

    json(): IContractJson {
      const jsonfunction = JSON.stringify(this);
      return JSON.parse(jsonfunction);
    },

    /**
     * @todo Write documentation
     */
    createEvent(name: string, inputs: Array<IInput>): IEvent {
      const newCallEvent = createEventModel({ name, inputs });
      return newCallEvent;
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
      const variable = createVariableModel({
        type,
        name,
        scope,
        setMethod,
        value,
      });
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