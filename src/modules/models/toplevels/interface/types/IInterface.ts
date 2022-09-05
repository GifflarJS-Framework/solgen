import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IFunctionStateMutabilityType } from "@modules/types/IFunctionStateMutabilityType";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import { IInterfaceJson } from "./IInterfaceJson";
import { ITypeNameOutput } from "@modules/types/ITypeNameOutput";

export interface IInterface extends IInterfaceJson {
  setInheritance(identifier: string, args?: Array<string>): IInherits;

  createEvent(name: string, inputs: Array<ITypeNameInput>): IEvent;

  createFunction(
    name: string,
    inputs?: Array<ITypeNameInput>,
    outputs?: Array<ITypeNameOutput>,
    stateMutability?: IFunctionStateMutabilityType
  ): IFunction;

  toJson(): IInterfaceJson;
  toString(): string;
}
