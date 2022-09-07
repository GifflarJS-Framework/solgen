import { IExpressionValue } from "../../../statements/expression/types/IExpressionValue";
export interface IVariable {
    type: string;
    name: string;
    expressionValue?: IExpressionValue;
}
