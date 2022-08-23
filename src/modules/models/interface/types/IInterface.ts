import { IEvent } from "@models/event/types/IEvent";
import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import { IOutput } from "@models/function/types/IOutput";
import { IInherits } from "@models/inherits/types/IInherits";
import { IFunctionStateMutabilityType } from "modules/types/IFunctionStateMutabilityType";
import { IInterfaceJson } from "./IInterfaceJson";

export interface IInterface extends IInterfaceJson {
  setInheritance(identifier: string, args?: Array<string>): IInherits;

  createEvent(name: string, inputs: Array<IInput>): IEvent;

  createFunction(
    name: string,
    inputs?: Array<IInput>,
    outputs?: Array<IOutput>,
    stateMutability?: IFunctionStateMutabilityType
  ): IFunction;

  toJson(): IInterfaceJson;
  toString(): string;
}
