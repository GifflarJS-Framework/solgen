import { IContent } from "../types/IContent";
import { IAssignmentModel } from "../../../statements/assignment/types/IAssignmentModel";
import { IVariableModel } from "../../../statements/variable/types/IVariableModel";
import { IIfModel } from "../../../statements/if/types/IIfModel";
import { IMethodCallModel } from "../../../statements/methodcall/types/IMethodCallModel";
import { IEventCallModel } from "../../../statements/eventCall/types/IEventCallModel";
import { ICreateContentDTO } from "../types/ICreateContentDTO";
import { IContinueModel } from "../../../statements/continue/types/IContinueModel";
import { IReturnModel } from "../../../statements/return/types/IReturnModel";
import { IAssertModel } from "../../../statements/assert/types/IAssertModel";
import { IBreakModel } from "../../../statements/break/types/IBreakModel";
import { ICatchModel } from "../../../statements/catch/types/ICatchModel";
import { IDoWhileModel } from "../../../statements/dowhile/types/IDoWhileModel";
import { IForModel } from "../../../statements/for/types/IForModel";
import { IRequireModel } from "../../../statements/require/types/IRequireModel";
import { IRevertModel } from "../../../statements/revert/types/IRevertModel";
import { ITryModel } from "../../../statements/try/types/ITryModel";
import { IWhileModel } from "../../../statements/while/types/IWhileModel";
import { ICustomCodeModel } from "../../../custom/customCode/types/ICustomCodeModel";
declare class ContentModel {
    private assertModel;
    private breakModel;
    private catchModel;
    private assignmnetModel;
    private variableModel;
    private ifModel;
    private methodCallModel;
    private eventCallModel;
    private continueModel;
    private doWhileModel;
    private returnModel;
    private forModel;
    private requireModel;
    private revertModel;
    private tryModel;
    private whileModel;
    private customCodeModel;
    constructor(assertModel: IAssertModel, breakModel: IBreakModel, catchModel: ICatchModel, assignmnetModel: IAssignmentModel, variableModel: IVariableModel, ifModel: IIfModel, methodCallModel: IMethodCallModel, eventCallModel: IEventCallModel, continueModel: IContinueModel, doWhileModel: IDoWhileModel, returnModel: IReturnModel, forModel: IForModel, requireModel: IRequireModel, revertModel: IRevertModel, tryModel: ITryModel, whileModel: IWhileModel, customCodeModel: ICustomCodeModel);
    execute({ stateVars }: ICreateContentDTO): IContent;
}
export default ContentModel;
