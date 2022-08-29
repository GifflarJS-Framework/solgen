import { ICreateDoWhileDTO } from "./ICreateDoWhileDTO";
import { IDoWhile } from "./IDoWhile";
export interface IDoWhileModel {
    execute({ condition }: ICreateDoWhileDTO): IDoWhile;
}
