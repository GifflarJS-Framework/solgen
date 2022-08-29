import { IExpression } from "../../../../models/statements/expression/types/IExpression";
export interface IExpressionWriter {
    write(json_expression: IExpression): string;
}
