import { IRevert } from "@models/statements/revert/types/IRevert";
import { IRevertWriter } from "../types/IRevertWriter";
import helpers from "@utils/helpers";

class RevertWriter implements IRevertWriter {
  write(revert: IRevert): string {
    if (revert.message) {
      return `revert("${revert.message}");`;
    } else if (revert.customErrorCall) {
      const argsText = helpers.getCommaExpression(revert.customErrorCall.args);
      return `revert ${revert.customErrorCall.customErrorName}(${argsText});`;
    } else {
      return `revert();`;
    }
  }
}

export default RevertWriter;
