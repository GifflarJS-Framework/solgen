import { IContentModel } from "@models/definitions/content/types/IContentModel";
import { inject, injectable } from "tsyringe";
import { ICreateModifierDTO } from "../types/ICreateModifierDTO";
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
    stateVars = [],
    isVirtual = false,
    isOverriding = false,
  }: ICreateModifierDTO): IModifier {
    const content_json = this.contentModel.execute({ stateVars });

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
