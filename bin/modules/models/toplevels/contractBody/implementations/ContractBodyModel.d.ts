import IEventModel from "../../../definitions/event/types/IEventModel";
import { IFunctionModel } from "../../../definitions/function/types/IFunctionModel";
import { IStateVariableModel } from "../../../definitions/stateVariable/types/IStateVariableModel";
import { IUsingModel } from "../../../definitions/using/types/IUsingModel";
import { IContractBody } from "../types/IContractBody";
import { IContractBodyModel } from "../types/IContractBodyModel";
declare class ContractBodyModel implements IContractBodyModel {
    private stateVariableModel;
    private functionModel;
    private eventModel;
    private usingModel;
    constructor(stateVariableModel: IStateVariableModel, functionModel: IFunctionModel, eventModel: IEventModel, usingModel: IUsingModel);
    execute(): IContractBody;
}
export default ContractBodyModel;
