import { IExpressionValue } from "../../expression/types/IExpressionValue";
export interface IAssignmentDTO {
    variable: string;
    expressionValue: IExpressionValue;
}
