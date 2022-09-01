import { ICreateModifierDTO } from "./ICreateModifierDTO";
import { IModifier } from "./IModifier";
export interface IModifierModel {
    execute({ title, args, stateVars }: ICreateModifierDTO): IModifier;
}
