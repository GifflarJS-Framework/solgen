import { IVariable } from "@models/variable/types/IVariable";
import { IInput } from "../types/IInput";
import { IStateMutabilityType } from "../types/IStateMutabilityType";

export interface ICreateFunctionDTO {
  name: string;
  scope: string;
  isConstructor?: boolean;
  stateMutability?: IStateMutabilityType;
  inputs?: Array<IInput>;
  outputs?: Array<string>;
  globalVars?: Array<IVariable>;
}
