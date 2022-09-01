import { IArrayType } from "../../../../types/IArrayType";
import { IElementaryTypeName } from "../../../../types/IElementaryTypeName";
export interface IUsingType {
    regularType?: IElementaryTypeName;
    array?: IArrayType;
    customType?: string;
}
