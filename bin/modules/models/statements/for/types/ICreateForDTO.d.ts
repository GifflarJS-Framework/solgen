import { IExpression } from "../../expression/types/IExpression";
import { ILocalVariable } from "../../variable/types/ILocalVariable";
export interface ICreateForDTO {
    variable?: ILocalVariable;
    condition?: string;
    expression?: IExpression;
}
