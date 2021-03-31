import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import { IVariable } from "@models/variable/types/IVariable";
import { IContractJson } from "./IContractJson";

export interface IContract extends IContractJson {
  json(): IContractJson;

  createEventCall(name: string, inputs: Array<IInput>): IEventCall;

  createVariable(
    type: string,
    name: string,
    scope?: string,
    setMethod?: boolean,
    value?: string
  ): IVariable;

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
