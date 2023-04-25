import { ICreateCustomCodeDTO } from "../types/ICreateCustomCodeDTO";
import { ICustomCode } from "../types/ICustomCode";
import { ICustomCodeModel } from "../types/ICustomCodeModel";

class CustomCodeModel implements ICustomCodeModel {
  execute({ code }: ICreateCustomCodeDTO): ICustomCode {
    const customCode: ICustomCode = {
      code,
    };

    return customCode;
  }
}

export default CustomCodeModel;
