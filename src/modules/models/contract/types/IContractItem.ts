import { IFunction } from "@models/function/types/IFunction";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";

export interface IContractItem {
  variables: Array<IGlobalVariable>;
  functions: Array<IFunction>;
}
