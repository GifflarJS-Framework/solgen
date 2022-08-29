import { ICreateRevertDTO } from "./ICreateRevertDTO";
import { IRevert } from "./IRevert";
export interface IRevertModel {
    execute(data?: ICreateRevertDTO): IRevert;
}
