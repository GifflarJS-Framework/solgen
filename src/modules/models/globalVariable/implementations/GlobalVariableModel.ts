import { ICreateGlobalVariableDTO } from "../types/ICreateGlobalVariableDTO";
import { IGlobalVariable } from "../types/IGlobalVariable";
import { IGlobalVariableModel } from "../types/IGlobalVariableModel";

class GlobalVariableModel implements IGlobalVariableModel {
  execute({
    type,
    customType,
    name,
    scope,
    value = "",
  }: ICreateGlobalVariableDTO): IGlobalVariable {
    let _type: string | undefined = type;
    if (customType) {
      _type = customType;
    }

    if (!_type) throw new Error("Variable type must be defined.");

    const globalVariable: IGlobalVariable = {
      statement: "global_variable",
      type: _type,
      name,
      scope: scope || "",
      value,
    };

    return globalVariable;
  }
}

export default GlobalVariableModel;
