import { ICreateReturnDTO } from "./ICreateReturnDTO";
import { IReturn } from "./IReturn";
export interface IReturnModel {
    execute(data: ICreateReturnDTO): IReturn;
}
