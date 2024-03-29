import { IStackItem } from "@models/definitions/content/types/IStackItem";
import { IInput } from "@modules/types/IInput";
import { IOutput } from "@modules/types/IOutput";
import { IFunctionStateMutabilityType } from "../../../../types/IFunctionStateMutabilityType";
import { IModifierInvocation } from "./IModifierInvocation";

export interface IFunctionJson extends IStackItem {
  name: string;
  scope: string;
  isConstructor: boolean;
  stateMutability?: IFunctionStateMutabilityType;
  inputs: Array<IInput>;
  outputs: Array<IOutput>;
  modifiers: Array<IModifierInvocation>;
  overrides?: boolean;
  virtual?: boolean;
}
