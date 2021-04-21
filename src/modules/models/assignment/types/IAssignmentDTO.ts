import { IExpression } from "@models/expression/types/IExpression";

export interface IAssignmentDTO {
  variable: string;
  value: IExpression;
}
