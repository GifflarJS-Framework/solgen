import { IFunction } from "@models/function/types/IFunction";
import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import { IVariable } from "@models/variable/types/IVariable";
import { Contract } from "web3-eth-contract";
import { IContractItem } from "./IContractItem";

export interface IContractJson {
  name: string;
  contract: IContractItem;
  code?: string;
  json?: any;
  instance?: Contract;
}
