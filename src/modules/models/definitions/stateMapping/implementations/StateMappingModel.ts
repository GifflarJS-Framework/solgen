import { INestedMapping } from "@models/statements/mapping/types/INestedMapping";
import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
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
