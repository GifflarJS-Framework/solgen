import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
import { IVisibility } from "modules/types/IVisibility";

export interface IMapping {
  statement: "mapping";
  type: IElementaryTypeName | IArrayType | string;
  typeName: IElementaryTypeName | IMapping | IArrayType | string;
  name: string;
  scope?: IVisibility;
}
