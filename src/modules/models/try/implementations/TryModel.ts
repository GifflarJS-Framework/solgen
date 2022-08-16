import { ICreateTry } from "../types/ICreateTry";
import { ITry } from "../types/ITry";
import { ITryModel } from "../types/ITryModel";

class TryModel implements ITryModel {
  execute({ expression, parameters }: ICreateTry): ITry {
    const _try: ITry = {
      statement: "try",
      expression,
      parameters,
      content: [],
    };

    return _try;
  }
}

export default TryModel;
