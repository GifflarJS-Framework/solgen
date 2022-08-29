import { ICreateCustomErrorDTO } from "./ICreateCustomErrorDTO";
import { ICustomError } from "./ICustomError";
export interface ICustomErrorModel {
    execute({ name, args }: ICreateCustomErrorDTO): ICustomError;
}
