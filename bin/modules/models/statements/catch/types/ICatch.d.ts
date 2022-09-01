import { IStackItem } from "../../../definitions/content/types/IStackItem";
import { IInput } from "../../../definitions/function/types/IInput";
export interface ICatch extends IStackItem {
    statement: "catch";
    identifier?: string;
    parameters: Array<IInput>;
}
