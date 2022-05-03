import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import { IContract } from "../types/IContract";
import { IContractJson } from "../types/IContractJson";
import { inject, injectable } from "tsyringe";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import { IEventCallModel } from "@models/eventCall/types/IEventCallModel";
import { IGlobalVariableModel } from "@models/globalVariable/types/IGlobalVariableModel";
import { IFunctionModel } from "@models/function/types/IFunctionModel";
import { IContractItem } from "../types/IContractItem";
import { IContractModel } from "../types/IContractModel";

@injectable()
class ContractModel implements IContractModel {
  constructor(
    @inject("GlobalVariableModel")
    private globalVariableModel: IGlobalVariableModel,
    @inject("FunctionModel")
    private functionModel: IFunctionModel,
    @inject("EventModel")
    private eventCallModel: IEventCallModel
  ) {}

  execute(contractName: string): IContract {
    const contract: IContractItem = {
      variables: [],
      functions: [],
    };

    const toJson = (): IContractJson => {
      const jsonfunction = JSON.stringify(this);
      return JSON.parse(jsonfunction);
    };

    const createEventCall = (
      name: string,
      inputs: Array<IInput>
    ): IEventCall => {
      const newEventCall = this.eventCallModel.execute({ name, inputs });
      return newEventCall;
    };

    const createVariable = (
      type: string,
      name: string,
      scope: string,
      setMethod?: boolean,
      value?: string
    ): IGlobalVariable => {
      const variable = this.globalVariableModel.execute({
        type,
        name,
        scope,
        setMethod,
        value,
      });
      if (scope) {
      }
      // else {
      //   variable = createVariableModel({
      //     type,
      //     name,
      //     value,
      //   });
      // }
      contract.variables.push(variable);
      return variable;
    };

    const createConstructor = (
      scope: string,
      inputs?: Array<IInput>,
      outputs?: Array<string>
    ): IFunction => {
      const _function = this.functionModel.execute({
        name: "",
        scope,
        isConstructor: true,
        inputs,
        outputs,
        globalVars: contract.variables,
      });
      contract.functions.push(_function);

      return _function;
    };

    const createFunction = (
      name: string,
      scope: string,
      inputs: Array<IInput>,
      outputs: Array<string>
    ): IFunction => {
      const _function = this.functionModel.execute({
        name,
        scope,
        inputs,
        outputs,
        isConstructor: false,
        globalVars: contract.variables,
      });
      contract.functions.push(_function);

      return _function;
    };

    const toString = (): string => {
      return JSON.stringify(this);
    };

    const _assignFunctions = <T>(obj: any): T => {
      const _obj = {
        ...obj,
        name: contractName,
        contract,
        toJson,
        createEventCall,
        createVariable,
        createConstructor,
        createFunction,
        toString,
      };
      return _obj;
    };

    const contract_json: IContract = _assignFunctions({});

    return contract_json;
  }
}

export default ContractModel;
