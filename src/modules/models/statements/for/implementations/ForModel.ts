import { ICreateForDTO } from "../types/ICreateForDTO";
import { IFor } from "../types/IFor";
import { IForModel } from "../types/IForModel";

class ForModel implements IForModel {
  execute({ assignment, condition, expression }: ICreateForDTO): IFor {
    const _for: IFor = {
      statement: "for",
      assignment,
      condition,
      expression,
      content: [],
    };

    return _for;
  }
}

export default ForModel;
