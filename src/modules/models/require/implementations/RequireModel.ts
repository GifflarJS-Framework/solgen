import { ICreateRequireModel } from "../types/ICreateRequireModel";
import { IRequire } from "../types/IRequire";
import { IRequireModel } from "../types/IRequireModel";

class RequireModel implements IRequireModel {
  execute({ condition, errorMessage }: ICreateRequireModel): IRequire {
    const require: IRequire = {
      statement: "require",
      condition,
      errorMessage,
    };

    return require;
  }
}

export default RequireModel;
