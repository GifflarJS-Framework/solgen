import { Contract } from "web3-eth-contract";
import { IContractItem } from "./IContractItem";

export interface IContractJson {
  name: string;
  contract: IContractItem;
  code?: string;
  json?: any;
  instance?: Contract;
}
