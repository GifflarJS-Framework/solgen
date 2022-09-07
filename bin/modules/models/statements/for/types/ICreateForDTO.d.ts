import { ILocalVariable } from "../../variable/types/ILocalVariable";
import { IExpressionValue } from "../../expression/types/IExpressionValue";
export interface ICreateForDTO {
    variable?: ILocalVariable;
    condition?: string;
    expressionValue?: IExpressionValue;
}
