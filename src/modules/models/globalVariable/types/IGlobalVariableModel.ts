import { ICreateGlobalVariableDTO } from "./ICreateGlobalVariableDTO";
import { IGlobalVariable } from "./IGlobalVariable";

export interface IGlobalVariableModel {
  execute({
    type,
    name,
    scope,
    setMethod,
    value,
  }: ICreateGlobalVariableDTO): IGlobalVariable;
}
