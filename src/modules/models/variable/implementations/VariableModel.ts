import { ICreateVariableDTO } from "../types/ICreateVariableDTO";
import { ILocalVariable } from "../types/ILocalVariable";
import { IVariableModel } from "../types/IVariableModel";

class VariableModel implements IVariableModel {
  execute({ type, name, value = "" }: ICreateVariableDTO): ILocalVariable {
    const variable: ILocalVariable = {
      statement: "variable",
      type,
      name,
      value,
    };

    return variable;
  }
}

export default VariableModel;
