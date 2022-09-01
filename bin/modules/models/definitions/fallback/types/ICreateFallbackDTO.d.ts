import { IVariable } from "../../stateVariable/types/IVariable";
export interface ICreateFallbackDTO {
    stateVars: Array<IVariable>;
    isPayable?: boolean;
}
