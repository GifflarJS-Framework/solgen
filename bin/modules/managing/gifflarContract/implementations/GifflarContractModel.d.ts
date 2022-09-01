import { IContractWriter } from "../../../writers/toplevels/contractWriter/types/IContractWriter";
import { ICompiler } from "../../../compiler/types/ICompiler";
import { IDeployer } from "../../../deployer/types/IDeployer";
import { IGifflarContract } from "../types/IGifflarContract";
import { IContractModel } from "../../../models/toplevels/contract/types/IContractModel";
import { IGifflarContractModel } from "../types/IGifflarContractModel";
import { IImportModel } from "../../../models/toplevels/import/types/IImportModel";
import { IImportWriter } from "../../../writers/toplevels/importWriter/types/IImportWriter";
declare class GifflarContractModel implements IGifflarContractModel {
    private importModel;
    private importWriter;
    private compiler;
    private contractWriter;
    private contractModel;
    private deployer;
    private imports;
    constructor(importModel: IImportModel, importWriter: IImportWriter, compiler: ICompiler, contractWriter: IContractWriter, contractModel: IContractModel, deployer: IDeployer);
    execute(contractName: string): IGifflarContract;
}
export default GifflarContractModel;
