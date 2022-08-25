import { IExpression } from "@models/statements/expression/types/IExpression";

export interface IAssignment {
  statement: "assignment";
  variable: string;
  value: IExpression;
}
