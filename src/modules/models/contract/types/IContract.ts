import { IEvent } from "@models/callevent/types/IEvent";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import { IVariable } from "@models/variable/types/IVariable";
import { IContractJson } from "./IContractJson";

export interface IContract extends IContractJson {
  json(): IContractJson;

  createEvent(name: string, inputs: Array<IInput>): IEvent;

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
