import { IExpression } from "@models/expression/types/IExpression";

export interface IAssignment {
  statement: "assignment";
  variable: string;
  value: string | IExpression | undefined;
}
