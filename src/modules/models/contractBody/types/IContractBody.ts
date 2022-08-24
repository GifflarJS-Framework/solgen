import { IEvent } from "@models/event/types/IEvent";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import { IOutput } from "@models/function/types/IOutput";
import { IStateVariable } from "@models/stateVariable/types/IStateVariable";
import { IUsing } from "@models/using/types/IUsing";
import { ITypeName } from "modules/types/ITypeName";
import { IVariableOptions } from "modules/types/IVariableOptions";
import { IContractBodyItem } from "./IContractBodyItem";

export interface IContractBody {
  body: IContractBodyItem;

  createUsing(identifier: string, type: ITypeName): IUsing;

  createEvent(name: string, inputs: Array<IInput>): IEvent;

  createVariable(
    type: ITypeName,
    name: string,
    scope: string,
    value?: string
  ): IStateVariable;

  createFunction(
    name: string,
    scope: string,
    inputs?: Array<IInput>,
    outputs?: Array<IOutput>
  ): IFunction;
}
