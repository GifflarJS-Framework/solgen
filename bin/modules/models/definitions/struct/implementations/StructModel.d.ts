import { ICreateStructDTO } from "../types/ICreateStructDTO";
import { IStruct } from "../types/IStruct";
import { IStructModel } from "../types/IStructModel";
declare class StructModel implements IStructModel {
    execute({ identifier, variables, mappings }: ICreateStructDTO): IStruct;
}
export default StructModel;
