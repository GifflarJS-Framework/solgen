import { IEvent } from "@models/event/types/IEvent";
import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import { IOutput } from "@models/function/types/IOutput";
import { IStateVariable } from "@models/stateVariable/types/IStateVariable";
import { IVariableOptions } from "modules/types/IVariableOptions";
import { IContractBodyItem } from "./IContractBodyItem";

export interface IContractBody {
  body: IContractBodyItem;

  createEvent(name: string, inputs: Array<IInput>): IEvent;

  createVariable(
    type: string,
    name: string,
    scope: string,
    value?: string,
    options?: IVariableOptions
  ): IStateVariable;

  createFunction(
    name: string,
    scope: string,
    inputs?: Array<IInput>,
    outputs?: Array<IOutput>
  ): IFunction;
}
