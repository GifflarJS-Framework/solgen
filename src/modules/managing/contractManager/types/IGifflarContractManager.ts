import { IWeb3 } from "@deployer/types/IWeb3";
import { IGifflarContract } from "@managing/contract/types/IGifflarContract";
import { IContractJson } from "@models/contract/types/IContractJson";
import { Contract } from "web3-eth-contract";
import { IManagerDeployDTO } from "./IManagerDeployDTO";

export interface IGifflarContractManager {
  contracts: Array<IGifflarContract>;
  code: string;
  json: any;
  newContract(name: string): IGifflarContract;
  getContract(name: string): IGifflarContract;
  writeAll(): string;
  write(contracts: Array<IContractJson>): string;
  written(): string | undefined;
  compileAll(callback: (errors: Array<any>) => void): any;
  compile(contractName: string, callback: (errors: Array<any>) => void): void;
  deploy(
    contractName: string,
    inputs: IManagerDeployDTO,
    accountPrivateKey?: string
  ): Promise<Contract>;
  setWeb3(newWeb3: IWeb3): IWeb3;
  getWeb3(): IWeb3 | undefined | null;
}
