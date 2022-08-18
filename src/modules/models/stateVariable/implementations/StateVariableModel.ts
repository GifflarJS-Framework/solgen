import { IStateVariableDTO } from "../types/IStateVariableDTO";
import { IStateVariable } from "../types/IStateVariable";
import { IStateVariableModel } from "../types/IStateVariableModel";

class StateVariableModel implements IStateVariableModel {
  execute({
    type,
    name,
    scope,
    value = "",
  }: IStateVariableDTO): IStateVariable {
    const stateVariable: IStateVariable = {
      statement: "state_variable",
      type,
      name,
      scope: scope || "",
      value,
    };

    return stateVariable;
  }
}

export default StateVariableModel;
