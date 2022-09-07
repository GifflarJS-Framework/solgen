import { ICreateStateVariableDTO } from "../types/ICreateStateVariableDTO";
import { IStateVariable } from "../types/IStateVariable";
import { IStateVariableModel } from "../types/IStateVariableModel";

class StateVariableModel implements IStateVariableModel {
  execute({
    type,
    name,
    scope,
    stateMutability,
    expressionValue,
  }: ICreateStateVariableDTO): IStateVariable {
    if (stateMutability === "constant" && !expressionValue)
      throw Error("A constant must have an initial value.");

    const stateVariable: IStateVariable = {
      type,
      name,
      scope: scope || "",
      stateMutability,
      expressionValue,
    };

    return stateVariable;
  }
}

export default StateVariableModel;
