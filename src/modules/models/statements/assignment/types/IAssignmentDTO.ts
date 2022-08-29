import { IExpression } from "@models/statements/expression/types/IExpression";

export interface IAssignmentDTO {
  variable: string;
  value: IExpression;
}
