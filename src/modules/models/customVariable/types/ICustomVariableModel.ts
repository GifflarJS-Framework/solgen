import { ILocalVariable } from "@models/variable/types/ILocalVariable";
import { ICreateCustomVariableDTO } from "./ICreateCustomVariableDTO";

export interface ICustomVariableModel {
  execute({ type, name, value }: ICreateCustomVariableDTO): ILocalVariable;
}
