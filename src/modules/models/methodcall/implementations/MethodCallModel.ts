import { IMethodCall } from "../types/IMethodCall";
import { ICreateMethodCallDTO } from "../types/ICreateMethodCallDTO";
import { IMethodCallModel } from "../types/IMethodCallModel";

class MethodCallModel implements IMethodCallModel {
  execute({ variable, method, value }: ICreateMethodCallDTO): IMethodCall {
    const jsonmethod: IMethodCall = {
      statement: "method_call",
      variable,
      method,
      value,
    };

    return jsonmethod;
  }
}

export default MethodCallModel;
