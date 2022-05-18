import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";
import { IDeployerInputs } from "./IDeployerInputs";
export interface IDeployer {
    setWeb3(newWeb3: Web3): Web3;
    getWeb3(): Web3 | undefined | null;
    deploy(inputs: IDeployerInputs): Promise<Contract>;
    retrieve(abi: AbiItem, address: string): Promise<Contract>;
}
