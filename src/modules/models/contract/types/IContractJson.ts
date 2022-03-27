import { IFunction } from "@models/function/types/IFunction";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import { IVariable } from "@models/variable/types/IVariable";
import { Contract } from "web3-eth-contract";

export interface IContractJson {
  name: string;
  contract: {
    variables: Array<IGlobalVariable>;
    functions: Array<IFunction>;
  };
  code?: string;
  json?: any;
  instance?: Contract;
}
