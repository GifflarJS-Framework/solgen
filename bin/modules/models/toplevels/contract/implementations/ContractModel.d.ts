import { IContract } from "../types/IContract";
import { IFunctionModel } from "../../../definitions/function/types/IFunctionModel";
import { IContractModel } from "../types/IContractModel";
import { IContractBodyModel } from "../../contractBody/types/IContractBodyModel";
import { IInheritsModel } from "../../inherits/types/IInheritsModel";
declare class ContractModel implements IContractModel {
    private functionModel;
    private inheritsModel;
    private contractBodyModel;
    constructor(functionModel: IFunctionModel, inheritsModel: IInheritsModel, contractBodyModel: IContractBodyModel);
    execute(contractName: string): IContract;
}
export default ContractModel;
