import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";

export interface IMapping {
  statement: "mapping";
  type: IElementaryTypeName | IArrayType | string;
  typeName: IElementaryTypeName | IMapping | IArrayType | string;
}
