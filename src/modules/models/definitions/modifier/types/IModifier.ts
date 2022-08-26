import { IContent } from "@models/definitions/content/types/IContent";
import { IInput } from "@models/definitions/function/types/IInput";

export interface IModifier extends IContent {
  title: string;
  args: Array<IInput>;
  isVirtual: boolean;
  isOverriding: boolean;

  toString(): string;
}
