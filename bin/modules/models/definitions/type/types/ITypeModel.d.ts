import { ICreateType } from "./ICreateTypeDTO";
import { IType } from "./IType";
export interface ITypeModel {
    execute(data: ICreateType): IType;
}
