import { IVariable } from "../../stateVariable/types/IVariable";
import { IModifierInvocation } from "../../function/types/IModifierInvocation";
export interface ICreateReceiveDTO {
    stateVars: Array<IVariable>;
    modifiers?: Array<IModifierInvocation>;
    overrides?: boolean;
    virtual?: boolean;
}
