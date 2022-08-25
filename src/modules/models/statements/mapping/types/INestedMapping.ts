import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";

export interface INestedMapping {
  statement: "nested_mapping";
  type?: IElementaryTypeName | IArrayType;
  customType?: string;
  typeName?: IElementaryTypeName | INestedMapping | IArrayType;
  customTypeName?: string;
}
