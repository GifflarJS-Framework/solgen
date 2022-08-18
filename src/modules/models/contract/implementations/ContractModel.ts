import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import { IContract } from "../types/IContract";
import { IContractJson } from "../types/IContractJson";
import { inject, injectable } from "tsyringe";
import { IStateVariable } from "@models/stateVariable/types/IStateVariable";
import { IEventCallModel } from "@models/eventCall/types/IEventCallModel";
import { IStateVariableModel } from "@models/stateVariable/types/IStateVariableModel";
import { IFunctionModel } from "@models/function/types/IFunctionModel";
import { IContractItem } from "../types/IContractItem";
import IEventModel from "@models/event/types/IEventModel";
import { IEvent } from "@models/event/types/IEvent";
import { IContractModel } from "../types/IContractModel";
import { IStateMutabilityType } from "modules/types/IStateMutabilityType";
import { ITypeName } from "modules/types/ITypeName";
import { IVariableOptions } from "modules/types/IVariableOptions";
import { IVisibility } from "modules/types/IVisibility";

@injectable()
class ContractModel implements IContractModel {
  constructor(
    @inject("StateVariableModel")
    private stateVariableModel: IStateVariableModel,
    @inject("FunctionModel")
    private functionModel: IFunctionModel,
    @inject("EventCallModel")
    private eventCallModel: IEventCallModel,
    @inject("EventModel")
    private eventModel: IEventModel
  ) {}

  execute(contractName: string): IContract {
    const contract: IContractItem = {
      variables: [],
      mappings: [],
      events: [],
      modifiers: [],
      customErrors: [],
      functions: [],
    };

    const toJson = (): IContractJson => {
      const jsonfunction = JSON.stringify({ name: contractName, contract });
      return JSON.parse(jsonfunction);
    };

    const createEvent = (name: string, inputs: Array<IInput>): IEvent => {
      const event = this.eventModel.execute({ name, inputs });
      contract.events.push(event);
      return event;
    };

    const createEventCall = (
      name: string,
      variables: Array<string>
    ): IEventCall => {
      const newEventCall = this.eventCallModel.execute({ name, variables });
      return newEventCall;
    };

    const createVariable = (
      type: ITypeName,
      name: string,
      scope: IVisibility,
      value?: string,
      options?: IVariableOptions
    ): IStateVariable => {
      const variable = this.stateVariableModel.execute({
        type:
          type === "custom" && options?.customType ? options.customType : type,
        name,
        scope,
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
        stateVars: contract.variables,
      });
      contract.functions.push(_function);

      return _function;
    };

    const createFunction = (
      name: string,
      scope: string,
      inputs: Array<IInput>,
      outputs: Array<string>,
      stateMutability?: IStateMutabilityType
    ): IFunction => {
      const _function = this.functionModel.execute({
        name,
        scope,
        inputs,
        outputs,
        isConstructor: false,
        stateVars: contract.variables,
        stateMutability,
      });
      contract.functions.push(_function);

      return _function;
    };

    const _assignFunctions = (): IContract => {
      const _obj: IContract = {
        name: contractName,
        contract,
        code: "",
        json: {},
        instance: undefined,
        toJson,
        createEvent,
        createEventCall,
        createVariable,
        createConstructor,
        createFunction,
        toString: (): string => {
          return JSON.stringify({ name: _obj.name, contract: _obj.contract });
        },
      };

      return _obj;
    };

    const json: IContract = _assignFunctions();
    return json;
  }
}

export default ContractModel;
