import { Contract } from "web3-eth-contract";
import { IContractItem } from "./IContractItem";
export interface IContractJson {
    contract: IContractItem;
    code?: string;
    json?: any;
    instance?: Contract | undefined;
}
