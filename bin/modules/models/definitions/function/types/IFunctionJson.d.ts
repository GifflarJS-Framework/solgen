import { IStackItem } from "../../content/types/IStackItem";
import { IInput } from "./IInput";
import { IFunctionStateMutabilityType } from "../../../../types/IFunctionStateMutabilityType";
import { IOutput } from "./IOutput";
export interface IFunctionJson extends IStackItem {
    name: string;
    scope: string;
    isConstructor: boolean;
    stateMutability?: IFunctionStateMutabilityType;
    inputs: Array<IInput>;
    outputs: Array<IOutput>;
    modifiers: Array<string>;
}
