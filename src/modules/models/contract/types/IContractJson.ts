import { IFunction } from "@models/function/types/IFunction";
import { IVariable } from "@models/variable/types/IVariable";
import { Contract } from "web3-eth-contract";

export interface IContractJson {
  name: string;
  contract: {
    variables: Array<IVariable>;
    functions: Array<IFunction>;
  };
  code?: string;
  json?: any;
  instance?: Contract;
}
