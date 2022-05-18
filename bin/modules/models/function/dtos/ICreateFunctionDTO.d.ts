import { IVariable } from "../../variable/types/IVariable";
import { IInput } from "../types/IInput";
export interface ICreateFunctionDTO {
    name: string;
    scope: string;
    isConstructor?: boolean;
    inputs?: Array<IInput>;
    outputs?: Array<string>;
    globalVars?: Array<IVariable>;
}
