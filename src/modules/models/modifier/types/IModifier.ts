import { IContent } from "@models/content/types/IContent";
import { IInput } from "@models/function/types/IInput";

export interface IModifier extends IContent {
  statement: "modifier";
  title: string;
  args: Array<IInput>;

  toString(): string;
}
