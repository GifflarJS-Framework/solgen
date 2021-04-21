import { IAssignment } from "@models/assignment/types/IAssignment";
import { IExpression } from "@models/expression/types/IExpression";

export interface ICreateForDTO {
  assignment: IAssignment;
  condition: string;
  expression: IExpression;
}
