import { IMethodCall } from "@models/statements/methodcall/types/IMethodCall";
import helpers from "@utils/helpers";
import { IMethodCallWriter } from "../types/IMethodCallWriter";

class MethodCallWriter implements IMethodCallWriter {
  write(json: IMethodCall): string {
    const txt_args = helpers.getCommaExpression(json.args);
    return `${json.variable}.${json.method}(${txt_args})`;
  }
}

export default MethodCallWriter;
