import { IStackItem } from "../../content/types/IStackItem";
import { IInput } from "./IInput";
export interface IFunctionJson extends IStackItem {
    name: string;
    scope: string;
    isConstructor: boolean;
    inputs: Array<IInput>;
    outputs: Array<string>;
    modifiers: Array<string>;
}
