import { IEvent } from "@models/event/types/IEvent";
import IEventModel from "@models/event/types/IEventModel";
import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IEventCallModel } from "@models/eventCall/types/IEventCallModel";
import { IFunction } from "@models/function/types/IFunction";
import { IFunctionModel } from "@models/function/types/IFunctionModel";
import { IInput } from "@models/function/types/IInput";
import { IStateVariable } from "@models/stateVariable/types/IStateVariable";
import { IStateVariableModel } from "@models/stateVariable/types/IStateVariableModel";
import { IFunctionStateMutabilityType } from "modules/types/IFunctionStateMutabilityType";
import { ITypeName } from "modules/types/ITypeName";
import { IVariableOptions } from "modules/types/IVariableOptions";
import { IVisibility } from "modules/types/IVisibility";
import { inject, injectable } from "tsyringe";
import { IContractBody } from "../types/IContractBody";
import { IContractBodyItem } from "../types/IContractBodyItem";
import { IContractBodyModel } from "../types/IContractBodyModel";

@injectable()
class ContractBodyModel implements IContractBodyModel {
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

  execute(): IContractBody {
    const body: IContractBodyItem = {
      variables: [],
      mappings: [],
      events: [],
      modifiers: [],
      customErrors: [],
      functions: [],
    };

    const createEvent = (name: string, inputs: Array<IInput>): IEvent => {
      const event = this.eventModel.execute({ name, inputs });
      body.events.push(event);
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
      body.variables.push(variable);
      return variable;
    };

    const createFunction = (
      name: string,
      scope: string,
      inputs: Array<IInput>,
      outputs: Array<string>,
      stateMutability?: IFunctionStateMutabilityType
    ): IFunction => {
      const _function = this.functionModel.execute({
        name,
        scope,
        inputs,
        outputs,
        isConstructor: false,
        stateVars: body.variables,
        stateMutability,
      });
      body.functions.push(_function);

      return _function;
    };

    const _assignFunctions = (): IContractBody => {
      const _obj: IContractBody = {
        body,
        createEvent,
        createEventCall,
        createVariable,
        createFunction,
      };

      return _obj;
    };

    const json: IContractBody = _assignFunctions();
    return json;
  }
}

export default ContractBodyModel;
