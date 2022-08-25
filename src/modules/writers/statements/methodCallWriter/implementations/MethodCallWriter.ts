import { IMethodCall } from "@models/statements/methodcall/types/IMethodCall";
import { IMethodCallWriter } from "../types/IMethodCallWriter";

class MethodCallWriter implements IMethodCallWriter {
  write(json: IMethodCall): string {
    return `${json.variable}.${json.method}(${json.value})`;
  }
}

export default MethodCallWriter;
