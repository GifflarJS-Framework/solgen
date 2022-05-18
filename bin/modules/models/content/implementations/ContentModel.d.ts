import { IContent } from "../types/IContent";
import { IAssignmentModel } from "../../assignment/types/IAssignmentModel";
import { IExpressionModel } from "../../expression/types/IExpressionModel";
import { IVariableModel } from "../../variable/types/IVariableModel";
import { INewContractModel } from "../../newcontract/types/INewContractModel";
import { IIfModel } from "../../if/types/IIfModel";
import { IMethodCallModel } from "../../methodcall/types/IMethodCallModel";
import { IEventCallModel } from "../../eventCall/types/IEventCallModel";
import { ICreateContentDTO } from "../types/ICreateContentDTO";
declare class ContentModel {
    private assignmnetModel;
    private expressionModel;
    private variableModel;
    private newContractModel;
    private ifModel;
    private methodCallModel;
    private eventCallModel;
    constructor(assignmnetModel: IAssignmentModel, expressionModel: IExpressionModel, variableModel: IVariableModel, newContractModel: INewContractModel, ifModel: IIfModel, methodCallModel: IMethodCallModel, eventCallModel: IEventCallModel);
    execute({ globalVars }: ICreateContentDTO): IContent;
}
export default ContentModel;
