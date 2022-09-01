import { ICreateStateVariableDTO } from "./ICreateStateVariableDTO";
import { IStateVariable } from "./IStateVariable";
export interface IStateVariableModel {
    execute({ type, name, scope, value, }: ICreateStateVariableDTO): IStateVariable;
}
