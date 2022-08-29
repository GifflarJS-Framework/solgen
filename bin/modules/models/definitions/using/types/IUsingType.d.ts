import { IArrayType } from "modules/types/IArrayType";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
export interface IUsingType {
    regularType?: IElementaryTypeName;
    array?: IArrayType;
    customType?: string;
}
