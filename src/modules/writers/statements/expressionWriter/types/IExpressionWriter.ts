import { IExpression } from "@models/expression/types/IExpression";

export interface IExpressionWriter {
  write(json_expression: IExpression): string;
}
