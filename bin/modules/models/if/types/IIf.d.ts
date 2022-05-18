import { IStackItem } from "../../content/types/IStackItem";
export interface IIf extends IStackItem {
    statement: "if";
    else: boolean;
    condition: string;
}
