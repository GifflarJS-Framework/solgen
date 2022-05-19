import { IWeb3 } from "@deployer/types/IWeb3";
import { IContract } from "@models/contract/types/IContract";
import { Contract } from "web3-eth-contract";
import { IContractDeployDTO } from "./IContractDeployDTO";

export interface IGifflarContract extends IContract {
  setName(newName: string): void;
  write(): string;
  compile(callback: (errors: any) => void): any;
  deploy(inputs: IContractDeployDTO, web3: IWeb3): Promise<Contract>;
  written(): string | undefined;
  compiled(): any | undefined;
  deployed(): Contract | undefined;
}
