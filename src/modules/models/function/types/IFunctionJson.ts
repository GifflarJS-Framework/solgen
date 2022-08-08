import { IStackItem } from "@models/content/types/IStackItem";
import { IInput } from "./IInput";
import { IStateMutabilityType } from "../../../types/IStateMutabilityType";

export interface IFunctionJson extends IStackItem {
  name: string;
  scope: string;
  isConstructor: boolean;
  stateMutability?: IStateMutabilityType;
  inputs: Array<IInput>;
  outputs: Array<string>;
  modifiers: Array<string>;
}
