import { ICreateEnumDTO } from "./ICreateEnumDTO";
import { IEnum } from "./IEnum";
export interface IEnumModel {
    execute(data: ICreateEnumDTO): IEnum;
}
