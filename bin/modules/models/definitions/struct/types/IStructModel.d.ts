import { ICreateStructDTO } from "./ICreateStructDTO";
import { IStruct } from "./IStruct";
export interface IStructModel {
    execute(data: ICreateStructDTO): IStruct;
}
