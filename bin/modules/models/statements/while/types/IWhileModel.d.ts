import { ICreateWhileDTO } from "./ICreateWhileDTO";
import { IWhile } from "./IWhile";
export interface IWhileModel {
    execute({ condition }: ICreateWhileDTO): IWhile;
}
