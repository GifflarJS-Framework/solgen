import { ICreateEnumDTO } from "../types/ICreateEnumDTO";
import { IEnum } from "../types/IEnum";
import { IEnumModel } from "../types/IEnumModel";

class EnumModel implements IEnumModel {
  execute({ identifier, identifiersOptions }: ICreateEnumDTO): IEnum {
    const _enum: IEnum = {
      statement: "enum",
      identifier,
      identifiersOptions,
    };
    return _enum;
  }
}

export default EnumModel;
