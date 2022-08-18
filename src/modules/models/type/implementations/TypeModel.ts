import { ICreateType } from "../types/ICreateTypeDTO";
import { IType } from "../types/IType";
import { ITypeModel } from "../types/ITypeModel";

class TypeModel implements ITypeModel {
  execute({ identifier, type }: ICreateType): IType {
    const _type: IType = {
      statement: "type",
      identifier,
      type,
    };

    return _type;
  }
}

export default TypeModel;
