import { ICreateForDTO } from "./ICreateForDTO";
import { IFor } from "./IFor";
export interface IForModel {
    execute({ variable, condition, expression }: ICreateForDTO): IFor;
}
