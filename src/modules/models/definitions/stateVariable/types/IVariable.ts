import { IExpression } from "@modules/models/statements/expression/types/IExpression";

export interface IVariable {
  type: string;
  name: string;
  expressionValue?: IExpression;
}
