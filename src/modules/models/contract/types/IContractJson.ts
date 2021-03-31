import { IFunction } from "@models/function/types/IFunction";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";

export interface IContractJson {
  name: string;
  contract: {
    variables: Array<IGlobalVariable>;
    functions: Array<IFunction>;
  };
}
