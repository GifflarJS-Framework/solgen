import { IVariable } from "./IVariable";

export interface ILocalVariable extends IVariable {
  statement: "variable";
  scope?: string;
  setMethod?: boolean;
}
