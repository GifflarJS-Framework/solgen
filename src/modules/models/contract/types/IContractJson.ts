import { IFunction } from "@models/function/types/IFunction";
import { IVariable } from "@models/variable/types/IVariable";

export interface IContractJson {
  name: string;
  contract: {
    variables: Array<IVariable>;
    functions: Array<IFunction>;
  };
}
