import { IFunctionJson } from "@models/function/types/IFunctionJson";
import { IStateVariable } from "@models/stateVariable/types/IStateVariable";

export interface IFunctionWriter {
  write(
    functions: Array<IFunctionJson>,
    variables: Array<IStateVariable>
  ): string;
}
