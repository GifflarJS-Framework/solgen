import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
import { IMapping } from "./IMapping";

export interface ICreateMapping {
  type?: IElementaryTypeName | IArrayType;
  customType?: string;
  typeName?: IElementaryTypeName | IMapping | IArrayType;
  customTypeName?: string;
  name: string;
}
