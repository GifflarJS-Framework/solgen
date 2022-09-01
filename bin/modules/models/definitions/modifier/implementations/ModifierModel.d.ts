import { IContentModel } from "../../content/types/IContentModel";
import { ICreateModifierDTO } from "../types/ICreateModifierDTO";
import { IModifier } from "../types/IModifier";
import { IModifierModel } from "../types/IModifierModel";
declare class ModifierModel implements IModifierModel {
    private contentModel;
    constructor(contentModel: IContentModel);
    execute({ title, args, stateVars, isVirtual, isOverriding, }: ICreateModifierDTO): IModifier;
}
export default ModifierModel;
