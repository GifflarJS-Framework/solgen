import { IContractBody } from "@models/toplevels/contractBody/types/IContractBody";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IInput } from "@models/definitions/function/types/IInput";
import { IOutput } from "@models/definitions/function/types/IOutput";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { ITypeName } from "modules/types/ITypeName";
import { IVariableOptions } from "modules/types/IVariableOptions";
import { IContractJson } from "./IContractJson";
import { IFallback } from "@models/definitions/fallback/types/IFallback";
import { IReceive } from "@models/definitions/receive/types/IReceive";

export interface IContract extends IContractJson, IContractBody {
  toJson(): IContractJson;

  setInheritance(identifier: string, args?: Array<string>): IInherits;

  createEvent(name: string, inputs: Array<IInput>): IEvent;

  createVariable(
    type: ITypeName,
    name: string,
    scope: string,
    value?: string,
    options?: IVariableOptions
  ): IStateVariable;

  createConstructor(
    scope: string,
    inputs?: Array<IInput>,
    outputs?: Array<IOutput>
  ): IFunction;

  createFunction(
    name: string,
    scope: string,
    inputs?: Array<IInput>,
    outputs?: Array<IOutput>
  ): IFunction;

  createFallback(isPayable?: boolean): IFallback;

  createReceive(): IReceive;

  toString(): string;
}
