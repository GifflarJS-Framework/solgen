import { IExpressionValue } from "../../expression/types/IExpressionValue";
export interface IAssignment {
    statement: "assignment";
    variable: string;
    expressionValue: IExpressionValue;
}
