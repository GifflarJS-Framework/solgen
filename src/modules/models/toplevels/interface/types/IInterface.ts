import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IInput } from "@models/definitions/function/types/IInput";
import { IOutput } from "@models/definitions/function/types/IOutput";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IFunctionStateMutabilityType } from "@modules/types/IFunctionStateMutabilityType";
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
