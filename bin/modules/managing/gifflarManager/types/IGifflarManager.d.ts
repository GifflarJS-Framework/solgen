import { IWeb3 } from "../../../deployer/types/IWeb3";
import { IGifflarContract } from "../../gifflarContract/types/IGifflarContract";
import { IImport } from "../../../models/toplevels/import/types/IImport";
import { Contract } from "web3-eth-contract";
import { ITopLevel } from "./ITopLevel";
import { IManagerDeployDTO } from "./IManagerDeployDTO";
import Web3 from "web3";
import { INetworkConfig } from "../../../deployer/types/INetworkConfig";
import { Account } from "web3-core";
export interface IGifflarManager {
    getCode(): string;
    getCompiledJson(): any;
    newImport(identifierPath: string, alias?: string): IImport;
    newContract(name: string): IGifflarContract;
    getContract(name: string): IGifflarContract;
    getImports(): Array<IImport>;
    getAllModels(): Array<ITopLevel>;
    writeAll(): string;
    write(topLevelModels: Array<ITopLevel>): string;
    written(): string | undefined;
    compileAll(callback: (errors: Array<any>) => void): any;
    compile(contractName: string, callback: (errors: Array<any>) => void): void;
    deploy(contractName: string, inputs: IManagerDeployDTO, accountPrivateKey?: string): Promise<Contract>;
    setWeb3(newWeb3: IWeb3): IWeb3;
    getWeb3(): IWeb3 | undefined | null;
    addSigner(accountPrivateKey: string): Account;
    setDeployConfig(networkConfig: INetworkConfig): Web3 | undefined;
}
