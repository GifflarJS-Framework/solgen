import { IVariable } from "@models/definitions/stateVariable/types/IVariable";
import { IVariableStateMutabilityType } from "@modules/types/IVariableStateMutabilityType";

export interface IStateVariable extends IVariable {
  stateMutability?: IVariableStateMutabilityType;
  scope: string;
}
