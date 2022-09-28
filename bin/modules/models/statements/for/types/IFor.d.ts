import { IStackItem } from "../../../definitions/content/types/IStackItem";
import { ILocalVariable } from "../../variable/types/ILocalVariable";
export interface IFor extends IStackItem {
    statement: "for";
    variable?: ILocalVariable;
    condition?: string;
    expression?: string;
}
