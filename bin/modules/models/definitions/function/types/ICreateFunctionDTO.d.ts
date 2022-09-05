import { IVariable } from "../../stateVariable/types/IVariable";
import { IInput } from "../../../../types/IInput";
import { IOutput } from "../../../../types/IOutput";
import { IFunctionStateMutabilityType } from "../../../../types/IFunctionStateMutabilityType";
export interface ICreateFunctionDTO {
    name: string;
    scope: string;
    isConstructor?: boolean;
    stateMutability?: IFunctionStateMutabilityType;
    inputs?: Array<IInput>;
    outputs?: Array<IOutput>;
    stateVars?: Array<IVariable>;
}
