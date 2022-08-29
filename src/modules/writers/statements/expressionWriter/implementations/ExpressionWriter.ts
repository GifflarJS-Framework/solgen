import { IExpression } from "@models/statements/expression/types/IExpression";
import { IExpressionWriter } from "../types/IExpressionWriter";

class ExpressionWriter implements IExpressionWriter {
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
  write(json_expression: IExpression): string {
    const text = json_expression.value;
    return text;
  }
}

export default ExpressionWriter;
