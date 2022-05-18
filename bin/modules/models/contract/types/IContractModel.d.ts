import { IContract } from "./IContract";
export interface IContractModel {
    execute(contractName: string): IContract;
}
