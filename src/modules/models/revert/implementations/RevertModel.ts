import { ICreateRevert } from "../types/ICreateRevert";
import { IRevert } from "../types/IRevert";
import { IRevertModel } from "../types/IRevertModel";

class RevertModel implements IRevertModel {
  execute(data?: ICreateRevert): IRevert {
    if (data && data.message) {
      // Revert with message `revert("message");`
      const revert: IRevert = {
        statement: "revert",
        message: data.message,
      };
      return revert;
    } else if (data && data.customErrorCall) {
      // Revert with event call `revert Unauthorized();`
      const revert: IRevert = {
        statement: "revert",
        customErrorCall: {
          customErrorName: data.customErrorCall.customErrorName,
          args: data.customErrorCall.args || [],
        },
      };
      return revert;
    } else {
      // Revert without args `revert()`
      const revert: IRevert = {
        statement: "revert",
      };
      return revert;
    }
  }
}

export default RevertModel;
