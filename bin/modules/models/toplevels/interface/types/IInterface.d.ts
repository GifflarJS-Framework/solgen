import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IInherits } from "../../inherits/types/IInherits";
import { IFunctionStateMutabilityType } from "../../../../types/IFunctionStateMutabilityType";
import { ITypeNameInput } from "../../../../types/ITypeNameInput";
import { IInterfaceJson } from "./IInterfaceJson";
import { ITypeNameOutput } from "../../../../types/ITypeNameOutput";
export interface IInterface extends IInterfaceJson {
    setInheritance(identifier: string, args?: Array<string>): IInherits;
    createEvent(name: string, inputs: Array<ITypeNameInput>): IEvent;
    createFunction(name: string, inputs?: Array<ITypeNameInput>, outputs?: Array<ITypeNameOutput>, stateMutability?: IFunctionStateMutabilityType): IFunction;
    toJson(): IInterfaceJson;
    toString(): string;
}
