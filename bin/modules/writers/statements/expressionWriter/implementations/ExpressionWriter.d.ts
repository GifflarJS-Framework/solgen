import { IExpression } from "../../../../models/statements/expression/types/IExpression";
import { IExpressionWriter } from "../types/IExpressionWriter";
declare class ExpressionWriter implements IExpressionWriter {
    /**
     * @example
     * Input
     * {
     *     statement: "expression",
     *     value: "!((val+1)+(val+1))"
     *  }
     *
     *  Result
     *  "!((val+1)+(val+1))"
     */
    write(json_expression: IExpression): string;
}
export default ExpressionWriter;
