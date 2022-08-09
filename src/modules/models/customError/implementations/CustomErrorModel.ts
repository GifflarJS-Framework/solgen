import { ICreateCustomErrorDTO } from "../types/ICreateCustomError";
import { ICustomError } from "../types/ICustomError";
import { ICustomErrorModel } from "../types/ICustomErrorModel";

class CustomError implements ICustomErrorModel {
  execute({ name, args = [] }: ICreateCustomErrorDTO): ICustomError {
    const customError: ICustomError = {
      statement: "custom_error",
      name,
      args,
    };

    return customError;
  }
}

export default CustomError;
