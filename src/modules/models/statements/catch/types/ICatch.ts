import { IStackItem } from "@models/definitions/content/types/IStackItem";
import { IInput } from "@modules/types/IInput";

export interface ICatch extends IStackItem {
  statement: "catch";
  identifier?: string;
  parameters: Array<IInput>;
}
