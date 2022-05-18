import { IAssignment } from "../../assignment/types/IAssignment";
import { IExpression } from "../../expression/types/IExpression";
export interface ICreateForDTO {
    assignment: IAssignment;
    condition: string;
    expression: IExpression;
}
