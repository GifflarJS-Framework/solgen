import { IInput } from "../../../../types/IInput";
import { IVariable } from "../../stateVariable/types/IVariable";
export interface ICreateModifierDTO {
    title: string;
    args: Array<IInput>;
    stateVars?: Array<IVariable>;
    isVirtual?: boolean;
    isOverriding?: boolean;
}
