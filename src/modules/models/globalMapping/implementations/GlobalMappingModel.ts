import { INestedMapping } from "@models/mapping/types/INestedMapping";
import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
import { ICreateGlobalMapping } from "../types/ICreateGlobalMapping";
import { IGlobalMapping } from "../types/IGlobalMapping";
import { IGlobalMappingModel } from "../types/IGlobalMappingModel";

class GlobalMappingModel implements IGlobalMappingModel {
  execute({
    type,
    typeName,
    customType,
    customTypeName,
    name,
    scope,
  }: ICreateGlobalMapping): IGlobalMapping {
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

    const mapping: IGlobalMapping = {
      statement: "global_mapping",
      type: _type,
      typeName: _typeName,
      name,
      scope,
    };

    return mapping;
  }
}

export default GlobalMappingModel;
