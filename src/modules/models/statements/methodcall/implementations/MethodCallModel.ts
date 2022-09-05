import { IMethodCall } from "../types/IMethodCall";
import { ICreateMethodCallDTO } from "../types/ICreateMethodCallDTO";
import { IMethodCallModel } from "../types/IMethodCallModel";

class MethodCallModel implements IMethodCallModel {
  execute({ variable, method, args }: ICreateMethodCallDTO): IMethodCall {
    const jsonmethod: IMethodCall = {
      statement: "method_call",
      variable,
      method,
      args,
    };

    return jsonmethod;
  }
}

export default MethodCallModel;
