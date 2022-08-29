import { IModifier } from "../../../../models/definitions/modifier/types/IModifier";
export interface IModifierWriter {
    write(modifiers: Array<IModifier>): string;
}
