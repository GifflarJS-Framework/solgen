import { INestedMapping } from "@models/statements/mapping/types/INestedMapping";
import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
import { IVisibility } from "modules/types/IVisibility";

export interface ICreateStateMappingDTO {
  type?: IElementaryTypeName | IArrayType;
  customType?: string;
  typeName?: IElementaryTypeName | INestedMapping | IArrayType;
  customTypeName?: string;
  name: string;
  scope?: IVisibility;
}
