import { IStackItem } from "@models/content/types/IStackItem";

export interface IDoWhile extends IStackItem {
  statement: "do_while";
  condition: string;
}
