import { IVariable } from "@models/variable/types/IVariable";
import { IInput } from "../types/IInput";
import { IFunctionStateMutabilityType } from "../../../types/IFunctionStateMutabilityType";

export interface ICreateFunctionDTO {
  name: string;
  scope: string;
  isConstructor?: boolean;
  stateMutability?: IFunctionStateMutabilityType;
  inputs?: Array<IInput>;
  outputs?: Array<string>;
  stateVars?: Array<IVariable>;
}
