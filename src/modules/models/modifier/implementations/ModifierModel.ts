import { IContentModel } from "@models/content/types/IContentModel";
import { inject, injectable } from "tsyringe";
import { ICreateModifierModelDTO } from "../types/ICreateModifierModelDTO";
import { IModifier } from "../types/IModifier";
import { IModifierModel } from "../types/IModifierModel";

@injectable()
class ModifierModel implements IModifierModel {
  constructor(
    @inject("ContentModel")
    private contentModel: IContentModel
  ) {}

  execute({
    title,
    args,
    globalVars = [],
    isVirtual = false,
    isOverriding = false,
  }: ICreateModifierModelDTO): IModifier {
    const content_json = this.contentModel.execute({ globalVars });

    const _modifier: IModifier = {
      statement: "modifier",
      title,
      args,
      isVirtual,
      isOverriding,
      ...content_json,

      toString(): string {
        return JSON.stringify(this);
      },
    };

    return _modifier;
  }
}

export default ModifierModel;