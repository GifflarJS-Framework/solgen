import { IStackItem } from "@models/content/types/IStackItem";
import { IInput } from "./IInput";
import { IFunctionStateMutabilityType } from "../../../types/IFunctionStateMutabilityType";

export interface IFunctionJson extends IStackItem {
  name: string;
  scope: string;
  isConstructor: boolean;
  stateMutability?: IFunctionStateMutabilityType;
  inputs: Array<IInput>;
  outputs: Array<string>;
  modifiers: Array<string>;
}
