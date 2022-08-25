import { IStackItem } from "@models/definitions/content/types/IStackItem";

export interface IIf extends IStackItem {
  statement: "if";
  else: boolean;
  condition: string;
  // content: Array<IContent>;
}
