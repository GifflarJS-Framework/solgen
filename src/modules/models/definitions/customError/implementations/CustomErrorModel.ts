import { ICreateCustomErrorDTO } from "../types/ICreateCustomErrorDTO";
import { ICustomError } from "../types/ICustomError";
import { ICustomErrorModel } from "../types/ICustomErrorModel";

class CustomError implements ICustomErrorModel {
  execute({ name, args = [] }: ICreateCustomErrorDTO): ICustomError {
    const customError: ICustomError = {
      name,
      args,
    };

    return customError;
  }
}

export default CustomError;
