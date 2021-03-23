import { IInput } from "./IInput";

export interface IFunctionJson {
  name: string;
  scope: string;
  isConstructor: boolean;
  inputs: Array<IInput>;
  outputs: Array<string>;
}
