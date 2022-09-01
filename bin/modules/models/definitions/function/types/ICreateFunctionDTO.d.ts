import { IVariable } from "../../stateVariable/types/IVariable";
import { IInput } from "./IInput";
import { IFunctionStateMutabilityType } from "../../../../types/IFunctionStateMutabilityType";
import { IOutput } from "./IOutput";
export interface ICreateFunctionDTO {
    name: string;
    scope: string;
    isConstructor?: boolean;
    stateMutability?: IFunctionStateMutabilityType;
    inputs?: Array<IInput>;
    outputs?: Array<IOutput>;
    stateVars?: Array<IVariable>;
}
