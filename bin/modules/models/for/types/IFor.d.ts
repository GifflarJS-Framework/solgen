import { IAssignment } from "../../assignment/types/IAssignment";
import { IStackItem } from "../../content/types/IStackItem";
import { IExpression } from "../../expression/types/IExpression";
export interface IFor extends IStackItem {
    statement: "for";
    assignment: IAssignment;
    condition: string;
    expression: IExpression;
}
