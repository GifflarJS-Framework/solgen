import { IModifier } from "../../../../models/definitions/modifier/types/IModifier";
import { IContentWriter } from "../../contentWriter/types/IContentWriter";
import { IInputWriter } from "../../../statements/inputWriter/types/IInputWriter";
import { IModifierWriter } from "../types/IModifierWriter";
declare class ModifierWriter implements IModifierWriter {
    private contentWriter;
    private inputWriter;
    constructor(contentWriter: IContentWriter, inputWriter: IInputWriter);
    write(modifiers: Array<IModifier>): string;
}
export default ModifierWriter;
