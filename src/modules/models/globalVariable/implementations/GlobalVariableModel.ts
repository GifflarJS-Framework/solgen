import { ICreateGlobalVariableDTO } from "../types/ICreateGlobalVariableDTO";
import { IGlobalVariable } from "../types/IGlobalVariable";
import { IGlobalVariableModel } from "../types/IGlobalVariableModel";

class GlobalVariableModel implements IGlobalVariableModel {
  execute({
    type,
    name,
    scope = "",
    setMethod = false,
    value = "",
  }: ICreateGlobalVariableDTO): IGlobalVariable {
    const globalVariable: IGlobalVariable = {
      statement: "global_variable",
      type,
      name,
      scope,
      value,
      setMethod,
    };

    return globalVariable;
  }
}

export default GlobalVariableModel;
