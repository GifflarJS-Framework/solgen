import { IExpression } from "@modules/models/statements/expression/types/IExpression";
import { IExpressionValue } from "@modules/models/statements/expression/types/IExpressionValue";

export interface IVariable {
  type: string;
  name: string;
  expressionValue?: IExpressionValue;
}
