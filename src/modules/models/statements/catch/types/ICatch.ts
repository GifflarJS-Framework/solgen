import { IStackItem } from "@models/definitions/content/types/IStackItem";
import { IInput } from "@models/definitions/function/types/IInput";

export interface ICatch extends IStackItem {
  statement: "catch";
  identifier?: string;
  parameters: Array<IInput>;
}
