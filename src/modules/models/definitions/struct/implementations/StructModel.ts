import { ICreateStructDTO } from "../types/ICreateStructDTO";
import { IStruct } from "../types/IStruct";
import { IStructModel } from "../types/IStructModel";

class StructModel implements IStructModel {
  execute({ identifier, variables, mappings }: ICreateStructDTO): IStruct {
    const struct: IStruct = {
      identifier,
      variables,
      mappings,
    };

    return struct;
  }
}

export default StructModel;
