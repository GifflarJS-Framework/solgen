import { IVariable } from "@models/definitions/stateVariable/types/IVariable";
import { IVariableStateMutabilityType } from "modules/types/IVariableStateMutabilityType";

export interface IStateVariable extends IVariable {
  statement: "state_variable";
  stateMutability?: IVariableStateMutabilityType;
  scope: string;
}
