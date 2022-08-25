import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
import { INestedMapping } from "./INestedMapping";

export interface IMapping {
  statement: "mapping";
  type: IElementaryTypeName | IArrayType | string;
  typeName: IElementaryTypeName | INestedMapping | IArrayType | string;
  name: string;
}
