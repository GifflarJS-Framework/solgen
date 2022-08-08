import { IEvent } from "@models/event/types/IEvent";
import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import { IVariableOptions } from "modules/types/IVariableOptions";
import { IContractJson } from "./IContractJson";

export interface IContract extends IContractJson {
  toJson(): IContractJson;

  createEvent(name: string, inputs: Array<IInput>): IEvent;

  createEventCall(name: string, variables: Array<string>): IEventCall;

  createVariable(
    type: string,
    name: string,
    scope: string,
    value?: string,
    options?: IVariableOptions
  ): IGlobalVariable;

  createConstructor(
    scope: string,
    inputs?: Array<IInput>,
    outputs?: Array<string>
  ): IFunction;

  createFunction(
    name: string,
    scope: string,
    inputs?: Array<IInput>,
    outputs?: Array<string>
  ): IFunction;

  toString(): string;
}
