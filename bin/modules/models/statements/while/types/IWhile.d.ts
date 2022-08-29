import { IStackItem } from "../../../definitions/content/types/IStackItem";
export interface IWhile extends IStackItem {
    statement: "while";
    condition: string;
}
