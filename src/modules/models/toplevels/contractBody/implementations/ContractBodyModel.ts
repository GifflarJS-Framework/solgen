import { IEvent } from "@models/definitions/event/types/IEvent";
import IEventModel from "@models/definitions/event/types/IEventModel";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IFunctionModel } from "@models/definitions/function/types/IFunctionModel";
import { IInput } from "@models/definitions/function/types/IInput";
import { IOutput } from "@models/definitions/function/types/IOutput";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IStateVariableModel } from "@models/definitions/stateVariable/types/IStateVariableModel";
import { IUsing } from "@models/definitions/using/types/IUsing";
import { IUsingModel } from "@models/definitions/using/types/IUsingModel";
import helpers from "@utils/helpers";
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
    @inject("EventModel")
    private eventModel: IEventModel,
    @inject("UsingModel")
    private usingModel: IUsingModel
  ) {}

  execute(): IContractBody {
    const body: IContractBodyItem = {
      usings: [],
      variables: [],
      mappings: [],
      events: [],
      modifiers: [],
      customErrors: [],
      functions: [],
    };

    const createUsing = (identifier: string, type: ITypeName): IUsing => {
      const using = this.usingModel.execute({
        identifier,
        type: helpers.writeTypeName(type),
      });
      body.usings.push(using);
      return using;
    };

    const createEvent = (name: string, inputs: Array<IInput>): IEvent => {
      const event = this.eventModel.execute({ name, inputs });
      body.events.push(event);
      return event;
    };

    const createVariable = (
      type: ITypeName,
      name: string,
      scope: IVisibility,
      value?: string
    ): IStateVariable => {
      const variable = this.stateVariableModel.execute({
        type: helpers.writeTypeName(type),
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
      outputs: Array<IOutput>,
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
        createUsing,
        createEvent,
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
