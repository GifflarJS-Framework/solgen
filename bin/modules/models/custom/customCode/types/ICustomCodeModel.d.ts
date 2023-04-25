import { ICreateCustomCodeDTO } from "./ICreateCustomCodeDTO";
import { ICustomCode } from "./ICustomCode";
export interface ICustomCodeModel {
    execute({ code }: ICreateCustomCodeDTO): ICustomCode;
}
