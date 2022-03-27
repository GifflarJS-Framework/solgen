import { IRequest } from "@models/request/types/IRequest";
import { IVariable } from "@models/variable/types/IVariable";

export interface IVariableWriter {
  write(
    variables: Array<IVariable> | IVariable,
    callback: (request: IRequest) => void
  ): string;
}
