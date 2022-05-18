import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import { IDeployer } from "../types/IDeployer";
import { IDeployerInputs } from "../types/IDeployerInputs";
declare class Deployer implements IDeployer {
    private web3;
    setWeb3(newWeb3: Web3): Web3;
    getWeb3(): Web3 | undefined | null;
    deploy(inputs: IDeployerInputs): Promise<Contract>;
    retrieve(abi: AbiItem, address: string): Promise<Contract>;
}
export default Deployer;
