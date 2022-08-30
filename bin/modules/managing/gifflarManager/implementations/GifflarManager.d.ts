import { IWeb3 } from "../../../deployer/types/IWeb3";
import { IGifflarContract } from "../../gifflarContract/types/IGifflarContract";
import { IGifflarContractModel } from "../../gifflarContract/types/IGifflarContractModel";
import { IGifflarInterface } from "../../GifflarInterface/types/IGifflarInterface";
import { IGifflarInterfaceModel } from "../../GifflarInterface/types/IGifflarInterfaceModel";
import { IGifflarLibrary } from "../../gifflarLibrary/types/IGifflarLibrary";
import { IGifflarLibraryModel } from "../../gifflarLibrary/types/IGifflarLibraryModel";
import { IImport } from "../../../models/toplevels/import/types/IImport";
import { IImportModel } from "../../../models/toplevels/import/types/IImportModel";
import { IImportWriter } from "../../../writers/toplevels/importWriter/types/IImportWriter";
import { ICompiler } from "modules/compiler/types/ICompiler";
import { IDeployer } from "modules/deployer/types/IDeployer";
import { Contract } from "web3-eth-contract";
import { ITopLevel } from "../types/ITopLevel";
import { IGifflarManager } from "../types/IGifflarManager";
import { IManagerDeployDTO } from "../types/IManagerDeployDTO";
import { INetworkConfig } from "../../../deployer/types/INetworkConfig";
import Web3 from "web3";
import { Account } from "web3-core";
declare class GifflarManager implements IGifflarManager {
    private importModel;
    private importWriter;
    private contractModel;
    private libraryModel;
    private interfaceModel;
    private deployer;
    private compiler;
    private imports;
    private topLevelModels;
    private code;
    private json;
    constructor(importModel: IImportModel, importWriter: IImportWriter, contractModel: IGifflarContractModel, libraryModel: IGifflarLibraryModel, interfaceModel: IGifflarInterfaceModel, deployer: IDeployer, compiler: ICompiler);
    private _writeTopLevelModels;
    newImport(identifierPath: string, alias?: string): IImport;
    newContract(name: string): IGifflarContract;
    newLibrary(name: string): IGifflarLibrary;
    newInterface(name: string): IGifflarInterface;
    getImports(): Array<IImport>;
    getCode(): string;
    getCompiledJson(): any;
    getAllModels(): Array<ITopLevel>;
    getContract(name: string): IGifflarContract;
    getLibrary(name: string): IGifflarLibrary;
    getInterface(name: string): IGifflarInterface;
    writeAll(): string;
    write(topLevelModels: Array<ITopLevel>): string;
    written(): string | undefined;
    compileAll(callback: (errors: Array<any>) => void): any;
    compile(contractName: string, callback: (errors: Array<any>) => void): void;
    deploy(contractName: string, inputs: IManagerDeployDTO, accountPrivateKey?: string): Promise<Contract>;
    setWeb3(newWeb3: IWeb3): IWeb3;
    setDeployConfig(networkConfig: INetworkConfig): Web3 | undefined;
    addSigner(accountPrivateKey: string): Account;
    getWeb3(): IWeb3 | null | undefined;
}
export default GifflarManager;
