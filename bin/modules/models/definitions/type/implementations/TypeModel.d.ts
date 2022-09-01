import { ICreateType } from "../types/ICreateTypeDTO";
import { IType } from "../types/IType";
import { ITypeModel } from "../types/ITypeModel";
declare class TypeModel implements ITypeModel {
    execute({ identifier, type }: ICreateType): IType;
}
export default TypeModel;
