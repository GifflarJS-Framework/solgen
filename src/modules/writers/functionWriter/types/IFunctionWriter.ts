import { IFunctionJson } from "@models/function/types/IFunctionJson";
import { IRequest } from "@models/request/types/IRequest";

export interface IFunctionWriter {
  write(
    functions: Array<IFunctionJson>,
    callback: (request: IRequest) => void
  ): string;
}
