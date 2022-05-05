import { IContract } from "@models/contract/types/IContract";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { IContractDeployDTO } from "./IContractDeployDTO";

export interface IGifflarContract extends IContract {
  setName(newName: string): void;
  write(): string;
  compile(callback: (errors: any) => void): any;
  deploy(inputs: IContractDeployDTO, web3: Web3): Promise<Contract>;
  written(): string | undefined;
  compiled(): any | undefined;
  deployed(): Contract | undefined;
}
