import { IContentModel } from "@models/definitions/content/types/IContentModel";
import { inject, injectable } from "tsyringe";
import { ICreateReceiveDTO } from "../types/ICreateReceiveDTO";
import { IReceive } from "../types/IReceive";
import { IReceiveModel } from "../types/IReceiveModel";

@injectable()
class ReceiveModel implements IReceiveModel {
  constructor(
    @inject("ContentModel")
    private contentModel: IContentModel
  ) {}

  execute({
    stateVars = [],
    modifiers,
    overrides,
    virtual,
  }: ICreateReceiveDTO): IReceive {
    const content_json = this.contentModel.execute({ stateVars });

    const receive: IReceive = {
      ...content_json,
      modifiers,
      overrides,
      virtual,

      setModifier(name: string, args?: string[]): IReceive {
        if (!receive.modifiers) receive.modifiers = [];
        receive.modifiers.push({ name, args: args || [] });
        return this;
      },
    };

    return receive;
  }
}

export default ReceiveModel;
