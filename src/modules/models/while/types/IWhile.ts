import { IStackItem } from "@models/content/types/IStackItem";

export interface IWhile extends IStackItem {
  statement: "while";
  condition: string;
}
