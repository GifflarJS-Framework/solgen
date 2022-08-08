import { IModifier } from "@models/modifier/types/IModifier";

export interface IModifierWriter {
  write(json: IModifier): string;
}
