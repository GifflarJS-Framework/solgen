import { ICatch } from "./ICatch";
import { ICreateCatchDTO } from "./ICreateCatchDTO";
export interface ICatchModel {
    execute(data: ICreateCatchDTO): ICatch;
}
