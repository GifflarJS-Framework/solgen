import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";
import { IDeployerInputs } from "./IDeployerInputs";
import { IWeb3 } from "./IWeb3";
import { INetworkConfig } from "./INetworkConfig";
import { Account } from "web3-core";
export interface IDeployer {
    setWeb3(newWeb3: IWeb3): IWeb3;
    getWeb3(): IWeb3 | undefined | null;
    setNetworkConfig(networkConfig: INetworkConfig): void;
    getNetworkConfig(): INetworkConfig | undefined;
    createWeb3(): IWeb3;
    addSigner(accountPrivateKey: string): Account;
    deploy(inputs: IDeployerInputs): Promise<Contract>;
    retrieve(abi: AbiItem, address: string): Promise<Contract>;
}
