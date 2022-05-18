import { ICreateExpressionDTO } from "../types/ICreateExpressionDTO";
import { IExpression } from "../types/IExpression";
import { IExpressionModel } from "../types/IExpressionModel";
declare class ExpressionModel implements IExpressionModel {
    execute({ value }: ICreateExpressionDTO): IExpression;
}
export default ExpressionModel;
