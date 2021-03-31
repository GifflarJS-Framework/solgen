import { IFunction } from "@models/function/types/IFunction";
import { IRequest } from "@models/request/types/IRequest";

export interface IFunctionWriter {
  write(
    functions: Array<IFunction>,
    callback: (request: IRequest) => void
  ): string;
}
