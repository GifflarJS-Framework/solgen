import { IVariable } from "./IVariable";
import { IVariableStateMutabilityType } from "modules/types/IVariableStateMutabilityType";
export interface IStateVariable extends IVariable {
    stateMutability?: IVariableStateMutabilityType;
    scope: string;
}
