import { IStackItem } from "@models/definitions/content/types/IStackItem";
import { IInput } from "@modules/types/IInput";
import { ITryExpression } from "./ITryExpression";

export interface ITry extends IStackItem {
  statement: "try";
  /** Try can only be used with external function calls and contract creation calls */
  expression: ITryExpression;
  parameters: Array<IInput>;
}
