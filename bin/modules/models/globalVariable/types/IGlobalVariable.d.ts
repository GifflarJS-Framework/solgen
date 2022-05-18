import { IVariable } from "../../variable/types/IVariable";
export interface IGlobalVariable extends IVariable {
    statement: "global_variable";
    scope: string;
}
