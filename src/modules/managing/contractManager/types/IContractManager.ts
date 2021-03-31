import { IGifflarContract } from "@managing/contract/types/IGifflarContract";
import { IDeployerInputs } from "modules/deployer/types/IDeployerInputs";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";

export interface IContractManager {
  contracts: Array<IGifflarContract>;
  code: string;
  json: any;

  newContract(name: string): IGifflarContract;
  getContract(name: string): IGifflarContract;
  write(contracts: Array<IGifflarContract>): string;
  compileAll(callback: (errors: Array<any>) => void): any;
  compile(contractName: string, callback: (errors: Array<any>) => void): void;
  deploy(contractName: string, inputs: IDeployerInputs): Promise<Contract>;

  setWeb3(newWeb3: Web3): Web3;
  getWeb3(): Web3 | undefined | null;
}
