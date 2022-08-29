import { ICreateMappingDTO } from "../types/ICreateMappingDTO";
import { IMapping } from "../types/IMapping";
import { IMappingModel } from "../types/IMappingModel";

class MappingModel implements IMappingModel {
  execute({ type, typeName, name }: ICreateMappingDTO): IMapping {
    const mapping: IMapping = {
      statement: "mapping",
      type,
      typeName,
      name,
    };

    return mapping;
  }
}

export default MappingModel;
