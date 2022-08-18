import { IStateVariableDTO } from "./IStateVariableDTO";
import { IStateVariable } from "./IStateVariable";

export interface IStateVariableModel {
  execute({ type, name, scope, value }: IStateVariableDTO): IStateVariable;
}
