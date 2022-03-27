import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import { IContractJson } from "./IContractJson";

export interface IContract extends IContractJson {
  toJson(): IContractJson;

  createEventCall(name: string, inputs: Array<IInput>): IEventCall;

  createVariable(
    type: string,
    name: string,
    scope: string,
    setMethod?: boolean,
    value?: string
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
