import { IVariable } from "@models/definitions/stateVariable/types/IVariable";
import { IInput } from "@modules/types/IInput";
import { IOutput } from "@modules/types/IOutput";
import { IFunctionStateMutabilityType } from "../../../../types/IFunctionStateMutabilityType";
import { IModifierInvocation } from "./IModifierInvocation";

export interface ICreateFunctionDTO {
  name: string;
  scope: string;
  isConstructor?: boolean;
  stateMutability?: IFunctionStateMutabilityType;
  inputs?: Array<IInput>;
  outputs?: Array<IOutput>;
  stateVars?: Array<IVariable>;
  modifiers?: Array<IModifierInvocation>;
  overrides?: boolean;
  virtual?: boolean;
}
