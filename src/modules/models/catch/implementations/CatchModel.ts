import { ICatch } from "../types/ICatch";
import { ICatchModel } from "../types/ICatchModel";
import { ICreateCatchDTO } from "../types/ICreateCatchDTO";

class CatchModel implements ICatchModel {
  execute({ identifier, parameters }: ICreateCatchDTO): ICatch {
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
