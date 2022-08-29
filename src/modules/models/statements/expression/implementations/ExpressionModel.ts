import { ICreateExpressionDTO } from "../types/ICreateExpressionDTO";
import { IExpression } from "../types/IExpression";
import { IExpressionModel } from "../types/IExpressionModel";

class ExpressionModel implements IExpressionModel {
  execute({ value }: ICreateExpressionDTO): IExpression {
    const expression: IExpression = {
      statement: "expression",
      value: value,
    };

    return expression;
  }
}

export default ExpressionModel;
