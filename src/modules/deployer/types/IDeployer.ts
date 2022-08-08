import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";
import { IDeployerInputs } from "./IDeployerInputs";
import { IWeb3 } from "./IWeb3";

export interface IDeployer {
  setWeb3(newWeb3: IWeb3): IWeb3;
  getWeb3(): IWeb3 | undefined | null;
  deploy(
    inputs: IDeployerInputs,
    accountPrivateKey?: string
  ): Promise<Contract>;
  retrieve(abi: AbiItem, address: string): Promise<Contract>;
}
