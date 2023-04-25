import { IContentModel } from "@models/definitions/content/types/IContentModel";
import { inject, injectable } from "tsyringe";
import { ICreateFallbackDTO } from "../types/ICreateFallbackDTO";
import { IFallback } from "../types/IFallback";
import { IFallbackModel } from "../types/IFallbackModel";

@injectable()
class FallbackModel implements IFallbackModel {
  constructor(
    @inject("ContentModel")
    private contentModel: IContentModel
  ) {}

  execute({
    stateVars = [],
    isPayable = false,
    modifiers,
    overrides,
    virtual,
  }: ICreateFallbackDTO): IFallback {
    const content_json = this.contentModel.execute({ stateVars });

    const fallback: IFallback = {
      isPayable,
      modifiers,
      overrides,
      virtual,
      ...content_json,

      setModifier(name: string, args?: string[]): IFallback {
        if (!fallback.modifiers) fallback.modifiers = [];
        fallback.modifiers.push({ name, args: args || [] });
        return this;
      },
    };

    return fallback;
  }
}

export default FallbackModel;
