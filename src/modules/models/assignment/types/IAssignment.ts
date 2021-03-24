import { IExpression } from "@models/expression/types/IExpression";

export interface IAssignment {
  statement: string;
  variable: string;
  value: string | IExpression | undefined;
}
