import Web3 from "web3";
import { IDeployer } from "../types/IDeployer";
interface ICreateDeployerDTO {
    web3: Web3 | undefined | null;
}
declare function createDeployer({ web3 }: ICreateDeployerDTO): IDeployer;
export default createDeployer;
