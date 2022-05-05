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

@injectable()
class ContractModel implements IContract {
  contract: IContractItem = {
    variables: [],
    functions: [],
  };

  constructor(
    public name: string = "",
    @inject("GlobalVariableModel")
    private globalVariableModel: IGlobalVariableModel,
    @inject("FunctionModel")
    private functionModel: IFunctionModel,
    @inject("EventModel")
    private eventCallModel: IEventCallModel
  ) {}

  toJson(): IContractJson {
    const jsonfunction = JSON.stringify(this);
    return JSON.parse(jsonfunction);
  }

  createEventCall(name: string, inputs: Array<IInput>): IEventCall {
    const newEventCall = this.eventCallModel.execute({ name, inputs });
    return newEventCall;
  }

  createVariable(
    type: string,
    name: string,
    scope: string,
    setMethod?: boolean,
    value?: string
  ): IGlobalVariable {
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
    this.contract.variables.push(variable);
    return variable;
  }

  createConstructor(
    scope: string,
    inputs?: Array<IInput>,
    outputs?: Array<string>
  ): IFunction {
    const _function = this.functionModel.execute({
      name: "",
      scope,
      isConstructor: true,
      inputs,
      outputs,
      globalVars: this.contract.variables,
    });
    this.contract.functions.push(_function);

    return _function;
  }

  createFunction(
    name: string,
    scope: string,
    inputs: Array<IInput>,
    outputs: Array<string>
  ): IFunction {
    const _function = this.functionModel.execute({
      name,
      scope,
      inputs,
      outputs,
      isConstructor: false,
      globalVars: this.contract.variables,
    });
    this.contract.functions.push(_function);

    return _function;
  }

  toString(): string {
    return JSON.stringify(this);
  }
}

export default ContractModel;
