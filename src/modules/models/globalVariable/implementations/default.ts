import { ICreateGlobalVariableDTO } from "../types/ICreateGlobalVariableDTO";
import { IGlobalVariable } from "../types/IGlobalVariable";

function createGlobalVariableModel({
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

export default createGlobalVariableModel;
