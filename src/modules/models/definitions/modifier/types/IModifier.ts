import { IContent } from "@models/definitions/content/types/IContent";
import { IInput } from "@modules/types/IInput";

export interface IModifier extends IContent {
  title: string;
  args: Array<IInput>;
  isVirtual: boolean;
  isOverriding: boolean;

  toString(): string;
}
