import { ICreateVariableDTO } from "./ICreateVariableDTO";
import { ILocalVariable } from "./ILocalVariable";
export interface IVariableModel {
    execute({ type, name, value }: ICreateVariableDTO): ILocalVariable;
}
