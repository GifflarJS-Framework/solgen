import { IExpressionValue } from "./IExpressionValue";
export interface IExpression {
    statement: "expression";
    value: IExpressionValue;
}
