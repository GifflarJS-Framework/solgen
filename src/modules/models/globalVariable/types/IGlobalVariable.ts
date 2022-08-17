import { IVariable } from "@models/variable/types/IVariable";

export interface IGlobalVariable extends IVariable {
  statement: "global_variable";
  scope: string;
}
