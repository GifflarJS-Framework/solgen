import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
import { INestedMapping } from "./INestedMapping";

export interface ICreateMapping {
  type?: IElementaryTypeName | IArrayType;
  customType?: string;
  typeName?: IElementaryTypeName | INestedMapping | IArrayType;
  customTypeName?: string;
  name: string;
}
