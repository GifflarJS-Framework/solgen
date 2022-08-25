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

  execute({ stateVars }: ICreateReceiveDTO): IReceive {
    const content_json = this.contentModel.execute({ stateVars });

    const receive: IReceive = {
      ...content_json,
    };

    return receive;
  }
}

export default ReceiveModel;
