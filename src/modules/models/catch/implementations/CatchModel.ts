import { ICatch } from "../types/ICatch";
import { ICatchModel } from "../types/ICatchModel";
import { ICreateCatch } from "../types/ICreateCatch";

class CatchModel implements ICatchModel {
  execute({ identifier, parameters }: ICreateCatch): ICatch {
    const _catch: ICatch = {
      statement: "catch",
      identifier,
      parameters,
      content: [],
    };

    return _catch;
  }
}

export default CatchModel;
