import { ICreateExpressionDTO } from "./ICreateExpressionDTO";
import { IExpression } from "./IExpression";
export interface IExpressionModel {
    execute({ value }: ICreateExpressionDTO): IExpression;
}
