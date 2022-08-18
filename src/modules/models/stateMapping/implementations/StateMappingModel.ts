import { INestedMapping } from "@models/mapping/types/INestedMapping";
import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
import { ICreateStateMappingDTO } from "../types/ICreateStateMappingDTO";
import { IStateMapping } from "../types/IStateMapping";
import { IStateMappingModel } from "../types/IStateMappingModel";

class StateMappingModel implements IStateMappingModel {
  execute({
    type,
    typeName,
    customType,
    customTypeName,
    name,
    scope,
  }: ICreateStateMappingDTO): IStateMapping {
    let _type: IElementaryTypeName | IArrayType | string | undefined = type;
    if (!type) {
      _type = customType;
    }

    let _typeName:
      | IElementaryTypeName
      | INestedMapping
      | IArrayType
      | string
      | undefined = typeName;
    if (!typeName) {
      _typeName = customTypeName;
    }

    if (!_type) throw new Error("You must define a mapping type");
    if (!_typeName) throw new Error("You must define a mapping type name");

    const mapping: IStateMapping = {
      statement: "state_mapping",
      type: _type,
      typeName: _typeName,
      name,
      scope,
    };

    return mapping;
  }
}

export default StateMappingModel;
