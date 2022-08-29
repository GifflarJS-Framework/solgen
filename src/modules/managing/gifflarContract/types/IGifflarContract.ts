import { IWeb3 } from "@deployer/types/IWeb3";
import { IContract } from "@models/directives/contract/types/IContract";
import { IContractJson } from "@models/directives/contract/types/IContractJson";
import { Contract } from "web3-eth-contract";
import { IContractDeployDTO } from "./IContractDeployDTO";

export interface IGifflarContract extends IContract {
  setName(newName: string): void;
  write(contracts?: Array<IContractJson>): string;
  compile(callback: (errors: any) => void): any;
  deploy(
    inputs: IContractDeployDTO,
    accountPrivateKey?: string,
    web3?: IWeb3
  ): Promise<Contract>;
  written(): string | undefined;
  compiled(): any | undefined;
  setWeb3(web3: IWeb3): void;
  deployed(): Contract | undefined;
}
