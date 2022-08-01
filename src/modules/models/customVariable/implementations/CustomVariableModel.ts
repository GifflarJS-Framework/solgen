import { ILocalVariable } from "@models/variable/types/ILocalVariable";
import { ICreateCustomVariableDTO } from "../types/ICreateCustomVariableDTO";
import { ICustomVariableModel } from "../types/ICustomVariableModel";

class CustomVariableModel implements ICustomVariableModel {
  execute({
    type,
    name,
    value = "",
  }: ICreateCustomVariableDTO): ILocalVariable {
    const variable: ILocalVariable = {
      statement: "variable",
      type,
      name,
      value,
    };

    return variable;
  }
}

export default CustomVariableModel;
