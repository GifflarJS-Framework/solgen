import { IStackItem } from "@models/definitions/content/types/IStackItem";

export interface IDoWhile extends IStackItem {
  statement: "do_while";
  condition: string;
}
