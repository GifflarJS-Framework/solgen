import { ICreateStateMappingDTO } from "../types/ICreateStateMappingDTO";
import { IStateMapping } from "../types/IStateMapping";
import { IStateMappingModel } from "../types/IStateMappingModel";

class StateMappingModel implements IStateMappingModel {
  execute({
    type,
    typeName,
    name,
    scope,
  }: ICreateStateMappingDTO): IStateMapping {
    const mapping: IStateMapping = {
      type,
      typeName,
      name,
      scope,
    };

    return mapping;
  }
}

export default StateMappingModel;
