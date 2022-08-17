import { INestedMapping } from "@models/mapping/types/INestedMapping";
import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
import { IVisibility } from "modules/types/IVisibility";

export interface IGlobalMapping {
  statement: "global_mapping";
  type: IElementaryTypeName | IArrayType | string;
  typeName: IElementaryTypeName | INestedMapping | IArrayType | string;
  name: string;
  scope?: IVisibility;
}
