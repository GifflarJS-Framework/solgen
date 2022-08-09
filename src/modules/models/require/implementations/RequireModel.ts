import { ICreateRequireDTO } from "../types/ICreateRequireDTO";
import { IRequire } from "../types/IRequire";
import { IRequireModel } from "../types/IRequireModel";

class RequireModel implements IRequireModel {
  execute({ condition, errorMessage }: ICreateRequireDTO): IRequire {
    const require: IRequire = {
      statement: "require",
      condition,
      errorMessage,
    };

    return require;
  }
}

export default RequireModel;
