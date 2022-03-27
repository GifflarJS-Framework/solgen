import { IVariable } from "@models/variable/types/IVariable";
import { IInput } from "./IInput";

export interface ICreateFunctionDTO {
  name: string;
  scope: string;
  isConstructor?: boolean;
  inputs?: Array<IInput>;
  outputs?: Array<string>;
  globalVars?: Array<IVariable>;
}
