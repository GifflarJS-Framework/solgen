import { IExpression } from "../../expression/types/IExpression";
export interface IAssignment {
    statement: "assignment";
    variable: string;
    value: IExpression;
}
