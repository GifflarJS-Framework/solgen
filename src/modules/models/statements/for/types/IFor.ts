import { IAssignment } from "@models/statements/assignment/types/IAssignment";
import { IStackItem } from "@models/definitions/content/types/IStackItem";
import { IExpression } from "@models/statements/expression/types/IExpression";

export interface IFor extends IStackItem {
  statement: "for";
  assignment: IAssignment;
  condition: string;
  expression: IExpression;
}
