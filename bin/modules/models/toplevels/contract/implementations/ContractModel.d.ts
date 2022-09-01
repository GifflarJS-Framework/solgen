import { IContract } from "../types/IContract";
import { IFunctionModel } from "../../../definitions/function/types/IFunctionModel";
import { IContractModel } from "../types/IContractModel";
import { IContractBodyModel } from "../../contractBody/types/IContractBodyModel";
import { IInheritsModel } from "../../inherits/types/IInheritsModel";
import { IFallbackModel } from "../../../definitions/fallback/types/IFallbackModel";
import { IReceiveModel } from "../../../definitions/receive/types/IReceiveModel";
declare class ContractModel implements IContractModel {
    private functionModel;
    private inheritsModel;
    private contractBodyModel;
    private fallbackModel;
    private receiveModel;
    constructor(functionModel: IFunctionModel, inheritsModel: IInheritsModel, contractBodyModel: IContractBodyModel, fallbackModel: IFallbackModel, receiveModel: IReceiveModel);
    execute(contractName: string): IContract;
}
export default ContractModel;
