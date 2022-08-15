import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
import { ICreateMapping } from "../types/ICreateMapping";
import { IMapping } from "../types/IMapping";
import { IMappingModel } from "../types/IMappingModel";

class MappingModel implements IMappingModel {
  execute({
    type,
    typeName,
    customType,
    customTypeName,
    name,
    scope,
  }: ICreateMapping): IMapping {
    let _type: IElementaryTypeName | IArrayType | string | undefined = type;
    if (!type) {
      _type = customType;
    }

    let _typeName:
      | IElementaryTypeName
      | IMapping
      | IArrayType
      | string
      | undefined = typeName;
    if (!typeName) {
      _typeName = customTypeName;
    }

    if (!_type) throw new Error("You must define a mapping type");
    if (!_typeName) throw new Error("You must define a mapping type name");

    const mapping: IMapping = {
      statement: "mapping",
      type: _type,
      typeName: _typeName,
      name,
      scope,
    };

    return mapping;
  }
}

export default MappingModel;
