import { IContract } from "../types/IContract";
import { IEventCallModel } from "../../eventCall/types/IEventCallModel";
import { IGlobalVariableModel } from "../../globalVariable/types/IGlobalVariableModel";
import { IFunctionModel } from "../../function/types/IFunctionModel";
import IEventModel from "../../event/types/IEventModel";
import { IContractModel } from "../types/IContractModel";
declare class ContractModel implements IContractModel {
    private globalVariableModel;
    private functionModel;
    private eventCallModel;
    private eventModel;
    constructor(globalVariableModel: IGlobalVariableModel, functionModel: IFunctionModel, eventCallModel: IEventCallModel, eventModel: IEventModel);
    execute(contractName: string): IContract;
}
export default ContractModel;
