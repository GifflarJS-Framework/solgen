import { ICreateForDTO } from "./ICreateForDTO";
import { IFor } from "./IFor";
export interface IForModel {
    execute({ assignment, condition, expression }: ICreateForDTO): IFor;
}
