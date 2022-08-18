import { IVariable } from "@models/variable/types/IVariable";

export interface IStateVariable extends IVariable {
  statement: "state_variable";
  scope: string;
}
