import { IStackItem } from "../../../definitions/content/types/IStackItem";
export interface IDoWhile extends IStackItem {
    statement: "do_while";
    condition: string;
}
