import { ICreateExpression } from "../types/ICreateExpression";
import { IExpression } from "../types/IExpression";

/**
 * @todo Write documentation
 * @ignore
 */
function createExpressionModel({ value }: ICreateExpression): IExpression {
  const expression = {
    statement: "expression",
    value: value,
  };

  return expression;
}

export default createExpressionModel;
