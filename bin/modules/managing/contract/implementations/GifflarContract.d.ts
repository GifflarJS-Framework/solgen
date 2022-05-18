import { IContractWriter } from "../../../writers/contractWriter/types/IContractWriter";
import { ICompiler } from "modules/compiler/types/ICompiler";
import { IDeployer } from "modules/deployer/types/IDeployer";
import { IGifflarContract } from "../types/IGifflarContract";
import { IContractModel } from "../../../models/contract/types/IContractModel";
import { IGifflarContractModel } from "../types/IGifflarContractModel";
declare class GifflarContract implements IGifflarContractModel {
    private compiler;
    private contractWriter;
    private contractModel;
    private deployer;
    constructor(compiler: ICompiler, contractWriter: IContractWriter, contractModel: IContractModel, deployer: IDeployer);
    execute(contractName: string): IGifflarContract;
}
export default GifflarContract;
