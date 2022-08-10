import { IContinue } from "../types/IContinue";
import { IContinueModel } from "../types/IContinueModel";

class ContinueModel implements IContinueModel {
  execute(): IContinue {
    const _continue: IContinue = {
      statement: "continue",
    };
    return _continue;
  }
}

export default ContinueModel;
