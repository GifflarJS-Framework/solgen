import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IInput } from "../../../definitions/function/types/IInput";
import { IOutput } from "../../../definitions/function/types/IOutput";
import { IInherits } from "../../inherits/types/IInherits";
import { IFunctionStateMutabilityType } from "modules/types/IFunctionStateMutabilityType";
import { IInterfaceJson } from "./IInterfaceJson";
export interface IInterface extends IInterfaceJson {
    setInheritance(identifier: string, args?: Array<string>): IInherits;
    createEvent(name: string, inputs: Array<IInput>): IEvent;
    createFunction(name: string, inputs?: Array<IInput>, outputs?: Array<IOutput>, stateMutability?: IFunctionStateMutabilityType): IFunction;
    toJson(): IInterfaceJson;
    toString(): string;
}
