import { IElementaryTypeName } from "modules/types/IElementaryTypeName";

export interface IType {
  statement: "type";
  identifier: string;
  type: IElementaryTypeName;
}
