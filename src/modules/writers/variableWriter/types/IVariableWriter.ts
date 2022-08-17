import { IRequest } from "@models/request/types/IRequest";
import { ILocalVariable } from "@models/variable/types/ILocalVariable";
import { IVariable } from "@models/variable/types/IVariable";

export interface IVariableWriter {
  write(variables: ILocalVariable): string;
}
