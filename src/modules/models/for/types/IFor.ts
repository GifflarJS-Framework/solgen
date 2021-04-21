import { IAssignment } from "@models/assignment/types/IAssignment";
import { IStackItem } from "@models/content/types/IStackItem";
import { IExpression } from "@models/expression/types/IExpression";

export interface IFor extends IStackItem {
  statement: "for";
  assignment: IAssignment;
  condition: string;
  expression: IExpression;
}
