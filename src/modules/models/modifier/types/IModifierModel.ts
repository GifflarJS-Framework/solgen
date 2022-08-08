import { ICreateModifierModelDTO } from "./ICreateModifierModelDTO";
import { IModifier } from "./IModifier";

export interface IModifierModel {
  execute({ title, args, globalVars }: ICreateModifierModelDTO): IModifier;
}
