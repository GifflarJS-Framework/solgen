import { IStackItem } from "@models/content/types/IStackItem";
import { IInput } from "@models/function/types/IInput";

export interface ICatch extends IStackItem {
  statement: "catch";
  identifier: string;
  parameters: Array<IInput>;
}
