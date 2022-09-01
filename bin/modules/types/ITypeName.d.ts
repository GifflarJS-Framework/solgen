import { IArrayType } from "./IArrayType";
import { IElementaryTypeName } from "./IElementaryTypeName";
export interface ITypeName {
    regularType?: IElementaryTypeName;
    array?: IArrayType;
    customType?: string;
}
