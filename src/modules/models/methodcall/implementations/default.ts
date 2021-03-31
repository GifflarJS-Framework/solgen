import { IMethodCall } from "../types/IMethodCall";
import { ICreateMethodCallDTO } from "../types/ICreateMethodCallDTO";

/**
 * @todo Finish documentation
 * @param {*} _variable
 * @param {*} _method
 * @param {*} _value
 */
function createMethodModel({
  variable,
  method,
  value,
}: ICreateMethodCallDTO): IMethodCall {
  const jsonmethod = {
    statement: "method_call",
    variable,
    method,
    value,
  };

  return jsonmethod;
}

export default createMethodModel;
