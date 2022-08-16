import { ICreateGlobalVariableDTO } from "../types/ICreateGlobalVariableDTO";
import { IGlobalVariable } from "../types/IGlobalVariable";
import { IGlobalVariableModel } from "../types/IGlobalVariableModel";

class GlobalVariableModel implements IGlobalVariableModel {
  execute({
    type,
    name,
    scope,
    value = "",
  }: ICreateGlobalVariableDTO): IGlobalVariable {
    const globalVariable: IGlobalVariable = {
      statement: "global_variable",
      type,
      name,
      scope: scope || "",
      value,
    };

    return globalVariable;
  }
}

export default GlobalVariableModel;
