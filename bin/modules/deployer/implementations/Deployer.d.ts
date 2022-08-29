import { IAbiItem } from "../types/IAbiItem";
import { IWeb3 } from "../types/IWeb3";
import { Contract } from "web3-eth-contract";
import { IDeployer } from "../types/IDeployer";
import { IDeployerInputs } from "../types/IDeployerInputs";
declare class Deployer implements IDeployer {
    private web3;
    setWeb3(newWeb3: IWeb3): IWeb3;
    getWeb3(): IWeb3 | undefined | null;
    deploy(inputs: IDeployerInputs, accountPrivateKey?: string): Promise<Contract>;
    retrieve(abi: IAbiItem, address: string): Promise<Contract>;
}
export default Deployer;
