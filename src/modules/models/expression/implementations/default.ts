import { ICreateExpressionDTO } from "../types/ICreateExpressionDTO";
import { IExpression } from "../types/IExpression";

/**
 * @todo Write documentation
 * @ignore
 */
function createExpressionModel({ value }: ICreateExpressionDTO): IExpression {
  const expression = {
    statement: "expression",
    value: value,
  };

  return expression;
}

export default createExpressionModel;
