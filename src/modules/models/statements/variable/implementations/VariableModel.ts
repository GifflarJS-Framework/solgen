import { ICreateVariableDTO } from "../types/ICreateVariableDTO";
import { ILocalVariable } from "../types/ILocalVariable";
import { IVariableModel } from "../types/IVariableModel";

class VariableModel implements IVariableModel {
  execute({
    type,
    dataLocation,
    name,
    expressionValue,
  }: ICreateVariableDTO): ILocalVariable {
    const variable: ILocalVariable = {
      statement: "variable",
      type,
      dataLocation,
      name,
      expressionValue,
    };

    return variable;
  }
}

export default VariableModel;
