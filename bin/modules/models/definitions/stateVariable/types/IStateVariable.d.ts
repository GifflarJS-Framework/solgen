import { IVariable } from "./IVariable";
import { IVariableStateMutabilityType } from "../../../../types/IVariableStateMutabilityType";
export interface IStateVariable extends IVariable {
    stateMutability?: IVariableStateMutabilityType;
    scope: string;
}
