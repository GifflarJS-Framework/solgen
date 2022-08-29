import { IBreak } from "../types/IBreak";
import { IBreakModel } from "../types/IBreakModel";

class BreakModel implements IBreakModel {
  execute(): IBreak {
    const _break: IBreak = {
      statement: "break",
    };
    return _break;
  }
}

export default BreakModel;
