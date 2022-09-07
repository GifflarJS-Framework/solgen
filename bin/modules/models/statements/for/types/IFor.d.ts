import { IStackItem } from "../../../definitions/content/types/IStackItem";
import { ILocalVariable } from "../../variable/types/ILocalVariable";
import { IExpressionValue } from "../../expression/types/IExpressionValue";
export interface IFor extends IStackItem {
    statement: "for";
    variable?: ILocalVariable;
    condition?: string;
    expressionValue?: IExpressionValue;
}
