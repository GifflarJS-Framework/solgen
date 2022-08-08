import { IModifier } from "@models/modifier/types/IModifier";

export interface IModifierWriter {
  write(modifiers: Array<IModifier>): string;
}
