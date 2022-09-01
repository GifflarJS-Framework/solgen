import { IExpression } from "../../expression/types/IExpression";
export interface IAssignmentDTO {
    variable: string;
    value: IExpression;
}
