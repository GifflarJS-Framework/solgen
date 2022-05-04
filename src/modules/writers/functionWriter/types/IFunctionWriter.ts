import { IFunctionJson } from "@models/function/types/IFunctionJson";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";

export interface IFunctionWriter {
  write(
    functions: Array<IFunctionJson>,
    variables: Array<IGlobalVariable>
  ): string;
}
