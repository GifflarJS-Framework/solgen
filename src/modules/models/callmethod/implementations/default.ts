import { ICreateCallMethodDTO } from "../types/ICreateCallMethodDTO";
import { IMethod } from "../types/IMethod";

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
}: ICreateCallMethodDTO): IMethod {
  const jsonmethod = {
    statement: "callmethod",
    variable: variable,
    method: method,
    value: value,
  };

  return jsonmethod;
}

export default createMethodModel;
