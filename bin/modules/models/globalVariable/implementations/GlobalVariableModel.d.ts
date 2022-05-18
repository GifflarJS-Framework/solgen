import { ICreateGlobalVariableDTO } from "../types/ICreateGlobalVariableDTO";
import { IGlobalVariable } from "../types/IGlobalVariable";
import { IGlobalVariableModel } from "../types/IGlobalVariableModel";
declare class GlobalVariableModel implements IGlobalVariableModel {
    execute({ type, name, scope, value, }: ICreateGlobalVariableDTO): IGlobalVariable;
}
export default GlobalVariableModel;
