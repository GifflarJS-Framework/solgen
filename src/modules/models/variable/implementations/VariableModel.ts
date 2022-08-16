import { ICreateVariableDTO } from "../types/ICreateVariableDTO";
import { ILocalVariable } from "../types/ILocalVariable";
import { IVariableModel } from "../types/IVariableModel";

class VariableModel implements IVariableModel {
  execute({
    type,
    customType,
    name,
    value = "",
  }: ICreateVariableDTO): ILocalVariable {
    let _type: string | undefined = type;
    if (customType) {
      _type = customType;
    }

    if (!_type) throw new Error("Variable type must be defined.");

    const variable: ILocalVariable = {
      statement: "variable",
      type: _type,
      name,
      value,
    };

    return variable;
  }
}

export default VariableModel;
