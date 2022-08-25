import { IAssignment } from "@models/statements/assignment/types/IAssignment";
import { IExpression } from "@models/statements/expression/types/IExpression";

export interface ICreateForDTO {
  assignment: IAssignment;
  condition: string;
  expression: IExpression;
}
