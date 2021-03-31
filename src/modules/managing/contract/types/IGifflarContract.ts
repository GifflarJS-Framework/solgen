import { IContract } from "@models/contract/types/IContract";
import { IDeployerInputs } from "modules/deployer/types/IDeployerInputs";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";

export interface IGifflarContract extends IContract {
  write(): string;
  compile(callback: (errors: any) => void): any;
  deploy(inputs: IDeployerInputs, web3: Web3): Promise<Contract>;
  written(): string;
  compiled(): any;
  deployed(): Contract;
}
