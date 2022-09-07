import { ICreateForDTO } from "../types/ICreateForDTO";
import { IFor } from "../types/IFor";
import { IForModel } from "../types/IForModel";

class ForModel implements IForModel {
  execute({ variable, condition, expressionValue }: ICreateForDTO): IFor {
    const _for: IFor = {
      statement: "for",
      variable,
      condition,
      expressionValue,
      content: [],
    };

    return _for;
  }
}

export default ForModel;
