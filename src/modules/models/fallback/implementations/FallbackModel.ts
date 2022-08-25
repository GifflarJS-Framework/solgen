import { IContentModel } from "@models/content/types/IContentModel";
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
  }: ICreateFallbackDTO): IFallback {
    const content_json = this.contentModel.execute({ stateVars });

    const fallback: IFallback = {
      isPayable,
      ...content_json,
    };

    return fallback;
  }
}

export default FallbackModel;
