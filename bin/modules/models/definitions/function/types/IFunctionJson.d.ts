import { IStackItem } from "../../content/types/IStackItem";
import { IInput } from "../../../../types/IInput";
import { IOutput } from "../../../../types/IOutput";
import { IFunctionStateMutabilityType } from "../../../../types/IFunctionStateMutabilityType";
export interface IFunctionJson extends IStackItem {
    name: string;
    scope: string;
    isConstructor: boolean;
    stateMutability?: IFunctionStateMutabilityType;
    inputs: Array<IInput>;
    outputs: Array<IOutput>;
    modifiers: Array<string>;
}
