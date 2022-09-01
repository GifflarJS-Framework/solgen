import { ICustomErrorModel } from "../../../definitions/customError/types/ICustomErrorModel";
import { IEnumModel } from "../../../definitions/enum/types/IEnumModel";
import IEventModel from "../../../definitions/event/types/IEventModel";
import { IFunctionModel } from "../../../definitions/function/types/IFunctionModel";
import { IModifierModel } from "../../../definitions/modifier/types/IModifierModel";
import { IStateMappingModel } from "../../../definitions/stateMapping/types/IStateMappingModel";
import { IStateVariableModel } from "../../../definitions/stateVariable/types/IStateVariableModel";
import { IStructModel } from "../../../definitions/struct/types/IStructModel";
import { IUsingModel } from "../../../definitions/using/types/IUsingModel";
import { IContractBody } from "../types/IContractBody";
import { IContractBodyModel } from "../types/IContractBodyModel";
declare class ContractBodyModel implements IContractBodyModel {
    private stateVariableModel;
    private functionModel;
    private eventModel;
    private usingModel;
    private modifierModel;
    private customErrorModel;
    private stateMappingModel;
    private enumModel;
    private structModel;
    constructor(stateVariableModel: IStateVariableModel, functionModel: IFunctionModel, eventModel: IEventModel, usingModel: IUsingModel, modifierModel: IModifierModel, customErrorModel: ICustomErrorModel, stateMappingModel: IStateMappingModel, enumModel: IEnumModel, structModel: IStructModel);
    execute(): IContractBody;
}
export default ContractBodyModel;
